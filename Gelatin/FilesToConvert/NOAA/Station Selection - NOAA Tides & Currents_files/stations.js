//robert.aspinall@noaa.gov

var filteryear;
var filter;

//Change to true to enable debugging statements
var logging = false;

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
   	return function( elem ) {
       	return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
   	};
});

function log(message) {
	if (logging) {
		if (window.console && console.log) {
			console.log(message);
		}
	}
}

$(document).ready(function() {
	$("#arealist").tinyNav({
		active: 'selecteditem',
		label: 'Jump to area',
		header: 'Please select an area'
	});
	
	var cvalue = getCookie("favorite_stations");
	var stations = [];
	if (cvalue != null) {
		stations = cvalue.split(":");
	}
	var faviconhtml = "<img src=\"/images/staricon2.png\" alt=\"Favorite stations icon\">";
	faviconhtml = '<i id="favicon" class="favicon_enabled ttip" style="cursor: auto;" rel="tooltip" data-original-title="Favorite station"></i>';
	for (var i = 0; i < stations.length; i++) {
		$("div.station:Contains(\"" + stations[i] + "\")").append(faviconhtml);
		$("div.station:Contains(\"" + stations[i] + "\")").addClass("alert");
	}
	$(".ttip").tooltip({placement: 'top'});
});

function filter() {
	var value = $("#searchtext").val();
	if (value == "Enter a station name or ID") { value = ""; }
	var year = $("#yeartext").val();
	if (year == undefined) { year = 0; }

	if (value == "" && year.toString().length != 4) {
		log("a");
		//Unmask everything, there are no valid filters
		$("div.second").css("margin-left", "2.12766%");
		$("div.third").css("margin-left", "2.12766%");
		$("div.station").show();
		$("div.station").parent().show();
		$("div.station").parent().parent().show();
	} else {
		log("b");
		//Mask everything first
		$("div.station").hide();
		$("div.station").parent().hide();
		$("div.station").parent().parent().hide();
		$("div.second").css("margin-left", "2.12766%");
		$("div.third").css("margin-left", "2.12766%");
		//Unmask stations that have data in the requested year and match the filter
		//Is there a year specified?
		if (year.toString().length == 4) {
			log("ba");
			$("span.datefield").each(function(index) {
				var datetext = $(this).html();
				var dp = datetext.split(" - ");
				var installed = dp[0];
				var removed = dp[1];
	
				if (removed == "") {
					removed = new Date().getFullYear();
				} else {
					removed = removed.substr(removed.length - 4, 4); 
				}
				installed = installed.substr(installed.length - 4, 4);

				if (year >= installed && year <= removed) {
					//The year matches, was there a search term to satisfy as well?
					if (value != "") {
						if (Contains($(this).parent().children('a').html(), value)) {
							$(this).parent().parent().parent().show();
							$(this).parent().parent().show();
							$(this).parent().show();
							$(this).show();
						}
					//No search term was specified, so just show based on the year matching.
					} else {
						$(this).parent().parent().parent().show();	
						$(this).parent().parent().show();	
						$(this).parent().show();
						$(this).show();
					}
					if ($($(this).parent()).hasClass("second")) {
						//Set the left margin on matched elements to zero to make them align correctly in the columns.
						if ($(this).parent().parent().firstChild.css("display") == "none") {
							log('got');
							$(this).parent().css("margin-left", "0px");
						}
						//$(this).parent().removeClass("marginfix");
					}
					if ($($(this).parent()).hasClass("third")) {
						//Set the left margin on matched elements to zero to make them align correctly in the columns.
						if ($(this).parent().parent().firstChild.css("display") == "none") {
							log('got');
							$(this).parent().css("margin-left", "0px");
						}
						//$(this).parent().removeClass("marginfix");
					}

				}
			});
			
		//No year was specified so just filter on the text string.
		} else {
			log(value);
			if (value == "") {
				log("bba");
				$("#div.station").parent().parent().show();
				$("#div.station").parent().show();
				$("#div.station").show();
				$("div.second").css("margin-left", "2.12766%");
				$("div.third").css("margin-left", "2.12766%");
			} else {
				log("bbb");
				$("div.station:Contains(\"" + value + "\")").parent().parent().show();
				$("div.station:Contains(\"" + value + "\")").parent().show();
				$("div.station:Contains(\"" + value + "\")").show();
				//If the first element isn't visible in this row, set the margin of the second element to 0px
				$("div.second:Contains(\"" + value + "\")").each(function() {
					if ($(this).parent().children().first().css("display") == "none") {
						log("Set on id in second: " + $(this).attr('id'));
						$(this).css("margin-left", "0px");
						//TODO: When there's no filter, reset the state of everything.  The margin-left 0px is getting left behind.
					}
				});
				$("div.third:Contains(\"" + value + "\")").each(function() {
					//If the first and second elements aren't visible in this row, set the margin to 0px.
					if ($(this).parent().children().first().css("display") == "none") {
						if ($(this).parent().children().slice(1).css("display") == "none") {
							log("Set on id in third: " + $(this).attr('id'));
							$(this).css("margin-left", "0px");
						}
					}
				});
			}
		}
	}
}
	
function Contains(string, value) {
	string = string.toUpperCase();
	value = value.toUpperCase();
	if (string.indexOf(value) != -1) {
		return true;
	}
	else { return false; }
}

function checkforclear(value) {
	if (value == "Enter a station name or ID") {
   		document.getElementById("searchtext").value = '';
	}
}

function checkyearforclear(value) {
	if (value == "Enter a year") {
		document.getElementById("yeartext").value = '';
	}
}
	
