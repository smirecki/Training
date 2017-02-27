var stationArray = [];
var stringArray = [];
var endStations = false;
var queryString = "#query";
var buttonString = "#buton";
var formString = "#searchForm";
var currentSearchTerm;

function setQuery(query){
	$(queryString).val(query);	
}

function isCurrents(stationId){
	var pattern2 = new RegExp("[a-z]", "gi");
	if (pattern2.test(stationId) == true) {
		return true;
	}
	
	return false;
}

function getStationId(stationName){
	var n = stationName.split(" ");
	return n[0];
}

function setStations(div, searchTerm){
	var cnt = 0;
	var html = "<ul class='nav nav-list'>";
	var stations = "";
	var url = "/stationhome.html?id=";
	
	if (searchTerm.length >= 2){
		$(document).ready(function(){
		$.each(stationArray, function(name){		
			var stationName = stationArray[name];
			var stationIdTemp = getStationId(stationName);
			url = "/stationhome.html?id=";
			
			var pattern1 = new RegExp("^"+searchTerm, "i");
			if (pattern1.test(stationName) == true) {
				//check if currents
				if (isCurrents(stationIdTemp)){
					url = "/cdata/StationInfo?id=";	//placeholder for actual currents page
				}
				var re = new RegExp("(" + searchTerm + ")", "gi");
				var t = stationName.replace(re, "<b>$1</b>");
				stations += "<li><a href='" + url + stationIdTemp + "'>" + t + "</a></li>\n";
				cnt++;
			} else {	
				var pattern2 = new RegExp(' '+searchTerm, "i");
				if (pattern2.test(stationName) == true) {
					if (isCurrents(stationIdTemp)){
						url = "/cdata/StationInfo?id=";	//placeholder for actual currents page
					}
					var re2 = new RegExp("(" + searchTerm + ")", "gi");
					var t2 = stationName.replace(re2, "<b>$1</b>");
					stations += "<li><a href='" + url + stationIdTemp + "'>" + t2 + "</a></li>\n";
					cnt++;
				}		
			}									
		});	
		});
	}
	html += "<li class='nav-header'>Station Search Results:&nbsp;&nbsp;" + cnt + "</li>";
	html += stations;
	html += "</ul>";
	
	$(div).append(html);	
}

function clearClick(){
	//document.getElementById("query").value='';
	$(queryString).val('');
	$(queryString).autocomplete('search');
	$(queryString).focus();	
}

function hideClearButton(){
	if ($(queryString).val() == "" || $(queryString).val().length < 2 ){
		$(buttonString).css("display", "none");
		$(".ui-autocomplete").css("display", "none");
		return 0;
	} else {
		$(buttonString).css("display", "");	
		return 1;
	}	
}

function getPageWidth(){
	var winW = 0;
	if (document.body && document.body.offsetWidth) {
		winW = document.body.offsetWidth;
	}
	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
		winW = document.documentElement.offsetWidth;
	}
	if (window.innerWidth && window.innerHeight) {
		winW = window.innerWidth;		
	}
	return winW;
}

function populateData(req, add){
	var searchTerm = req.term;	
	currentSearchTerm = searchTerm;
	var result = hideClearButton();
	
	if (result == 1){			
		stringArray =[];
		$.getJSON("http://search.usa.gov/sayt?name=tidesandcurrents&q="+searchTerm+"&callback=?", function(data){
			
			stringArray.push("STATIONS");
			//matcher for station list
				var cnt = 0;
				$.each(stationArray, function(name){
					
					var stationName = stationArray[name];
					
					var pattern1 = new RegExp("^"+searchTerm, "i");
					if (pattern1.test(stationName) == true) {
						stringArray.push(stationName);
						cnt++;
						return cnt !==10;
					} else {	
						var pattern2 = new RegExp(' '+searchTerm, "i");
						if (pattern2.test(stationName) == true) {
							stringArray.push(stationName);
							cnt++;
							return cnt !==10;
						}		
					}									
				});	
				if (cnt == 0){
					stringArray.shift();
				} else if (cnt == 10){
					stringArray.push("more...");
				}

				//separator							
				if (data.length > 0){
					stringArray.push("SEARCH SUGGESTIONS");
				}							
				
				var cnt2 = 0;
				$.each(data, function(item){														
					stringArray.push(data[item]);
					cnt2++;
					return cnt2 !== 10;	
				});	
				
				/*
				if (cnt2 == 10){
					stringArray.push("more...");
				}*/							
				
				if (cnt2 == 0 && cnt == 0){
					stringArray.push("No suggestions found");
				}
				
				add(stringArray);							
		});
	}
}
	
$(function(){
	var cnt = 0;
	var winW = getPageWidth();
	
	if (winW != 0 && winW <= 767){
		queryString = "#query2";
		buttonString = "#buton2";
		formString = "#searchForm2";
	}	
	
	// press back button (old value should have x next to it)
	if ($(queryString).val() != ""){
		$(buttonString).css("display", "");	
	}	
	
	$(queryString).focus(function(){
		hideClearButton();
	});	
	
	/*
	if ($(queryString).val() == "Search Tides & Currents"){ 		
		//$(queryString).css("color", "DarkGrey");
		//$(queryString).css("font-style", "italic");	
		$(queryString).css("color", "gray");
		$(queryString).css("font-size", "11px");
		$(queryString).css("font-weight", "bold");
		$(queryString).css("text-transform", "uppercase");
	}*/
		
	/*
	$(queryString).one("focus", function(){
		if ($(queryString).val() == "Search Tides & Currents"){ 
			$(queryString).val('');
			//$(queryString).css("color", "#555555");
			//$(queryString).css("font-style", "normal");
		}
	});*/
	
	// StationInformation
	stationArray = [];
	$.getJSON("/cgi-bin/stationbarsearch.cgi?callback=?&term=&type=" + "active", function(data) {
					$.each(data, function(item){
						if (data[item]) {
							stationArray.push(data[item].name);
						}
					});	
					if ($("#station_list").length != 0){
						setStations("#station_list", $("#query").val());
					}
	});
	
	stringArray = [];
	
	$(queryString).autocomplete({			
		source: function(req, add){
			populateData(req, add); 
			endStations = false;
		},
		position: {
			offset: '0 -1'
		},		
		minLength: 0,
		select: function(event, ui){
			if (ui.item.label == "more..."){				
				$(queryString).val(currentSearchTerm);
			} else {
				$(queryString).val(ui.item.label);
			}
			
			if (ui.item.temp == 'station'){
				var n = ui.item.label.split(" ");
				var stationId = n[0];
				
				if (isCurrents(stationId)){
					window.open("/cdata/StationInfo?id="+stationId, "_self");
				} else {
					window.open("/stationhome.html?id="+stationId, "_self");
				}
			} else {							
				$(formString).submit();		//this will work for mobile once create new search page
			}
		}
	}).data( "autocomplete" )._renderItem = function( ul, item ) {			
		var tempString = "";
		if (item.label == "SEARCH SUGGESTIONS"){
			endStations = true;
			tempString = "<span class=search-separator>" + item.label + "</span>";
		} else if(item.label == "STATIONS"){
			tempString = "<span class=search-separator>" + item.label + "</span>";
		} else if(item.label == "more..."){
			tempString = "<a><b>" + "more..." + "</b></a>";
			if (endStations == false){
				tempString = tempString + "<div style='margin-bottom:6px;'></div>";
			}
		} else if(item.label == "No suggestions found"){
			tempString = "<span class=search-separator>" + "No Search Suggestions" + "</span>";
		}else {
			var re = new RegExp("(" + this.term + ")", "gi");
			var t = item.label.replace(re, "<b>$1</b>");
			
			/*
			if (t.length > 37){
				var t = t.substring(0,37);
				var t = t + "...";
			}*/

			if (endStations == false){
				item.temp = 'station';
				tempString = "<a>" + t + "</a>";
			} else {				
				tempString = "<a>" + t + "</a>";
			}
		}
		return $("<li></li>").data("item.autocomplete", item).append(tempString).appendTo(ul);									
	};
	
	
});