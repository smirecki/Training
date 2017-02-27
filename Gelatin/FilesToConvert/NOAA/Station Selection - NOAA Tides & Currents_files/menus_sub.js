var threshold = 750;
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
if (isChrome) { threshold = 767; }

//Change to true to enable debugging statements
var logging = false;

function log(message) {
	if (logging) {
		if (window.console && console.log) {
			console.log(message);
		}
	}
}

function breadcrumb() {
	this.appendLocation = function(element) {
		$(".breadcrumb").append('<li>' + element + '</li>');
		$(".brand").text(element);
	}
	
	this.appendStation = function(id, name, state, optional) {
		var html = '<li>';
		var cvalue = getCookie("favorite_stations");
		if (cvalue == null) { cvalue = ""; }
		var stations = cvalue.split(":");
		var found = false;
		var favstationhtml = "";
		for (var i = 0; i < stations.length; i++) {
			//log("Considering: " + stations[i]);
			var favid = stations[i].split("|")[0];
			var favname = stations[i].split("|")[1];
			var favstate = stations[i].split("|")[2];
			var stationstring = favid + ' ' + favname;
			if (favstate != "") { stationstring += ", " + favstate; }
			
			if (id == stations[i].split("|")[0]) {
				found = true;
				favstationhtml += '<li class="disabled" style="text-shadow: none; width: 100%;"><a href="?id=' + favid + '">' + stationstring + '</a></li>';
			} else {
				if (favid != "" && favname != "") {
					favstationhtml += '<li style="text-shadow: none; width: 100%"><a href="?id=' + favid + '">' + stationstring + '</a></li>';
				}
			}
		}
		favstationhtml += '<li style="text-shadow: none; width: 100%"><a href="/favorites.html">Manage Favorites</a></li>';
		html += id + ' ' + name;
		var text = id + ' ' + name;
		if (state != "") {
			html += ", " + state;
			text += ", " + state;
		}
		
		if (!optional) { optional = ""; }
		html += optional;
		//Show the gold star if this station is a favorite, otherwise the grey one.
		//Clicking the grey one adds the station as a favorite, clicking the gold one removes that station as a favorite.
		
		//Check to see if this is a global sea level trend station
		//var re = /^[\d]{3}-[\d]{3}$/;
		//Check to make sure this is an NWLON station
		var re = /^[\d]{7}$/;
		if (re.test(id) == true){
			if (found) {
				html += ' <i id="favicon" class="favicon_enabled ttip" rel="tooltip" data-original-title="Remove from favorite stations"></i> ';
			} else {
				html += ' <i id="favicon" class="favicon_disabled ttip" rel="tooltip" data-original-title="Add to favorite stations"></i> ';
			}
		
		//}
		
		html += '</li>';
		
		html += '<li class="dropdown">';
		html += '&nbsp;&nbsp;<a id="favorites_dropdown" class="dropdown-toggle ttip" rel="tooltip" data-original-title="Favorite Stations" data-toggle="dropdown" role="button" href="#"><b class="caret"></b></a>';
		html += '<ul id="favorites_menu" class="dropdown-menu" aria-labelledby="favorites_dropdown" role="menu" style="max-height: 150px; overflow: auto;">';
		
		html += favstationhtml;
		html += '</ul>';
		html += '</li>';
}
		$(".breadcrumb").append(html);
		$(".ttip").tooltip({placement: 'top'});
		
		if (found) {
			$("#favicon").click(function() {
				deleteFromFavorites(id, name, state);
			});
		} else {
			$("#favicon").click(function() {
				addToFavorites(id, name, state);
			});
		}
		$(".brand").text(text);
	}
	
	this.appendPath = function(element) {
		$(".breadcrumb").append('<li>' + element + '<span class="divider">/</span></li>');
	}
	
	this.appendProductPulldown = function(type) {
	   var pdc = '<li class="dropdown">';
	   pdc += '<a class="dropdown-toggle" data-toggle="dropdown" href="#">';
	   pdc += 'Water Levels<b class="caret"></b>';
	   pdc += '</a>';
	   pdc += '<ul class="dropdown-menu">';
	   pdc += '<li><a href="waterlevels.html?id=' + station_id + '">Water Levels</a></li>';
	   pdc += '</ul>';
	   pdc += '</li>';
	   $(".breadcrumb").append(pdc);	
	}
	
	this.appendHomeLink = function(id) {
		$(".breadcrumb").append('<li class="pull-right"><a href="stationhome.html?id=' + id + '"><i class="icon-home"></i> Go to Station Home</a></li>');
	}
	
	this.appendFavoritesControl = function(id) {
		var html = '<li class="pull-right">';
		html += "test";
		html += '</li>';
		$(".breadcrumb").append(html);
	}
}

function isStationInFavorites(id) {
	var cvalue = getCookie("favorite_stations");
	var stations = cvalue.split(":");
	for (var i = 0; i < stations.length; i++) {
		var favid = stations[i].split("|")[0];
		//log("Considering " + favid + " against " + id);
		if (favid == id) {
			return true;
		}
	}
	return false;
}

function addToFavorites(id,name,state) {
	//Remove the existing onclick event
	$("#favicon").prop("onclick", null);
	$("#favicon").unbind('click');
	$("#favicon").tooltip('hide')
		.attr('data-original-title', "Remove from favorite stations")
		.tooltip('fixTitle')
		.tooltip('show');
	
	//log("Onclick is now " + $("#favicon").prop("onclick"));
	//log("Add to favorites with id: " + id);
	var cvalue = getCookie("favorite_stations");
	//log("Current cookie value is " + cvalue);
	//If there's no current value, just store the current station, otherwise append it.
	if (cvalue == null || cvalue == "") {
		cvalue = id + '|' + name + '|' + state;
		//log("Set cvalue to " + cvalue);
	} else { 
		var stations = cvalue.split(":");
		stations.push(id + '|' + name + '|' + state);
		cvalue = stations.join(":");
		//log("Set cvalue to " + cvalue);
	}
	
	//Set the new cookie value with an expiration of 10 years.
	setCookie("favorite_stations", cvalue, 3650);
	
	//Turn the star icon from grey to gold
	$("#favicon").removeClass("favicon_disabled");
	$("#favicon").addClass("favicon_enabled");
	$("#favicon").click(function() {
		deleteFromFavorites(id, name, state);
	});
}

function deleteFromFavorites(id, name, state) {
	//Remove the existing onclick event
	$("#favicon").prop("onclick", null);
	$("#favicon").unbind('click');
	$("#favicon").tooltip('hide')
		.attr('data-original-title', "Add to favorite stations")
		.tooltip('fixTitle')
		.tooltip('show');

	//log("Onclick is now " + $("#favicon").prop("onclick"));
	//log("Delete from favorites with id: " + id);
	var cvalue = getCookie("favorite_stations");
	var stations = cvalue.split(":");
	var index = null;
	for (var i = 0; i < stations.length; i++) {
		if (id == stations[i].split("|")[0]) {
			index = i;
		}
	}
	//Remove that particular station
	stations.splice(index, 1);
	cvalue = stations.join(":");
	setCookie("favorite_stations", cvalue, 3650);
	$("#favicon").removeClass("favicon_enabled");
	$("#favicon").addClass("favicon_disabled");
	$("#favicon").click(function() {
		addToFavorites(id, name, state);
	});
}

//From http://www.w3schools.com/js/js_cookies.asp
function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; path=/; expires="+exdate.toUTCString());
	//alert("Setting: " + c_value);
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start,c_end));
	}
	//alert("Returning: " + c_value);
	return c_value;
}

$(document).ready(function() {
	$('.carousel').carousel({
		interval: false
	});
	adjustForMode();
	
	$("#productbutton").hoverIntent(function () {
		showProducts();
	}, function () {
		hideProducts();
	});

	$("#productbutton").click(function() {
		$("#products").toggle();
	});
	
	$("#productbutton select").mouseout(function(e) {
        e.stopPropagation();
	});

	$("#portsselect").click(function(e) {
		e.stopPropagation();
	});

	$("#ofsselect").click(function(e) {
		e.stopPropagation();
	});
	
	$("#restlessselect").click(function(e) {
		e.stopPropagation();
	});

	$("#educationbutton").click(function() {
		$("#education").toggle();
	});
	
	$("#educationbutton select").mouseout(function(e) {
        e.stopPropagation();
	});

	$("#aboutbutton").click(function() {
		$("#about").toggle();
	});

	$("#partnerbutton").click(function() {
		$("#partners").toggle();
	});

	$("#educationbutton").hoverIntent(function () {
		showEducation();
	}, function () {
		hideEducation();
	});

	$("#partnerbutton").hoverIntent(function () {
		showPartners();	
	}, function () {
		hidePartners();	
	});

	$("#aboutbutton").hoverIntent(function () {
		showAbout();
	}, function () {
		hideAbout();
	});
	
	$("#productbutton2").click(function() {
		window.location = "products.html";
	});
	$("#partnerbutton2").click(function() {
		window.location = "programs.html";
	});
	$("#educationbutton2").click(function() {
		window.location = "education.html";
	});
	$("#aboutbutton2").click(function() {
		window.location = "about.html";
	});
	
	var quickdivhtml = "<li class='visible-phone' id='quicknavli'><button class='btn' id='quicknavbutton'>Quick links <i class='icon-th-list'></i></button></li>";
	$(".quicknav li").addClass("hidden-phone");
	$(".quicknav").prepend(quickdivhtml);
	$("#quicknavbutton").click(function() {
		if ($(".quicknav li").hasClass("hidden-phone")) {
			$(".quicknav li").removeClass("hidden-phone");
		} else {
			$(".quicknav li").addClass("hidden-phone");
			$("#quicknavli").removeClass("hidden-phone");
		}
	});
	
});

$(window).resize(function() {
	adjustForMode();
});



function adjustForMode() {
	if ($(window).width() <= threshold) {
		mobileMode();
	} else {
		desktopMode();
	}
}

function mobileMode() {
	$(".pane").css("margin-left", "0px");
	$(".panebutton").addClass("well");
	$("#products").removeClass("pulldown");
	$("#education").removeClass("pulldown");
	$("#about").removeClass("pulldown");
	$("#partners").removeClass("pulldown");
	$("#products").addClass("inline");
	$("#education").addClass("inline");
	$("#about").addClass("inline");
	$("#partners").addClass("inline");
	$(".pane").css("border", "0px");
}

function desktopMode() {
	$(".pane").css("border", "1px");
	$(".panebutton").removeClass("well");
	$("#products").removeClass("inline");
	$("#education").removeClass("inline");
	$("#about").removeClass("inline");
	$("#partners").removeClass("inline");
	$("#products").addClass("pulldown");
	$("#education").addClass("pulldown");
	$("#about").addClass("pulldown");
	$("#partners").addClass("pulldown");
}

function showProducts() {
	var productoffset = 0;
	if ($(document).width() > threshold) {
		$("#productbutton").css("background-color", "white");
		$("#products").css("margin-left", -1 * productoffset + "px");
		$("#productspacer").css("left", productoffset - 5 + "px");
		$("#productbutton").css("border", "1px solid gray");
      	$(".products").css("border", "1px solid gray");
	  	$("#products").css("left", $("#productbutton").offset().left + "px");
	  	$("#products").css("top", $("#productbutton").offset().top + $("#productbutton").height() + "px");
	  	$("#productspacer").width($("#productbutton").width() + 10);
		$("#productspacer").show();
	}
	$("#products").show();
}

function hideProducts() {
	if ($(document).width() > threshold) {
		$("#productbutton").css("background-color", "#F5F5F5");
		$("#productbutton").css("border-right", "1px solid #EAEAEA");
		$("#productbutton").css("border-left", "0px");
		$("#productbutton").css("border-top", "0px");
		$("#productbutton").css("border-bottom", "0px");

	  	$(".products").css("border", "1px solid white");
	}
   	$("#products").fadeOut("fast");
}

function showEducation() {
	var educationoffset = 330;
	if ($(document).width() > threshold) {
		$("#educationbutton").css("background-color", "white");
		$("#education").css("margin-left", -1 * educationoffset + "px");
		//$("#education").css("margin-left", -1 * ($("#education").width() - $("#educationbutton").width()) - 1 + "px");
		$("#educationspacer").css("left", educationoffset - 5 + "px");
		$("#educationbutton").css("border", "1px solid gray");
      	$(".education").css("border", "1px solid gray");
	  	$("#education").css("left", $("#educationbutton").offset().left + "px");
	  	$("#education").css("top", $("#educationbutton").offset().top + $("#educationbutton").height() + "px");
	  	$("#educationspacer").width($("#educationbutton").width() + 10);
		$("#educationspacer").show();
	}
	$("#education").show();
}


function hideEducation() {
	if ($(document).width() > threshold) {
		$("#educationbutton").css("background-color", "#F5F5F5");
		$("#educationbutton").css("border-right", "1px solid #EAEAEA");
		$("#educationbutton").css("border-left", "0px");
		$("#educationbutton").css("border-top", "0px");
		$("#educationbutton").css("border-bottom", "0px");

	  	$(".education").css("border", "1px solid white");
	}
   	$("#education").fadeOut("fast");
}


function showPartners() {
	var partneroffset = 200;
	if ($(document).width() > threshold) {
		$("#partnerbutton").css("background-color", "white");
		$("#partners").css("margin-left", -1 * partneroffset + "px");
		$("#partnerspacer").css("left", partneroffset - 5 + "px");
		$("#partnerbutton").css("border", "1px solid gray");
      	$(".partners").css("border", "1px solid gray");
	  	$("#partners").css("left", $("#partnerbutton").offset().left + "px");
	  	$("#partners").css("top", $("#partnerbutton").offset().top + $("#partnerbutton").height() + "px");
	  	$("#partnerspacer").width($("#partnerbutton").width() + 10);
		$("#partnerspacer").show();
  	}
   	$("#partners").show();	
}

function hidePartners() {
	if ($(document).width() > threshold) {
		$("#partnerbutton").css("background-color", "#F5F5F5");
		$("#partnerbutton").css("border-right", "1px solid #EAEAEA");
		$("#partnerbutton").css("border-left", "0px");
		$("#partnerbutton").css("border-top", "0px");
		$("#partnerbutton").css("border-bottom", "0px");

	  	$(".partners").css("border", "1px solid white");
	}
   	$("#partners").fadeOut("fast");	
}



function showAbout() {
	if ($(document).width() > threshold) {
		$("#aboutbutton").css("background-color", "white");
		var aboutoffset = (600 - $("#aboutbutton").width()) * -1;
		$("#about").css("margin-left", aboutoffset + "px");
	  	$("#aboutspacer").width($("#aboutbutton").width() + 10);
		$("#aboutspacer").css("left", 600 - $("#aboutspacer").width() + 5 + "px");
		$("#aboutbutton").css("border", "1px solid gray");
      	$(".about").css("border", "1px solid gray");
	  	$("#about").css("left", $("#aboutbutton").offset().left + "px");
	  	$("#about").css("top", $("#aboutbutton").offset().top + $("#aboutbutton").height() + "px");
		$("#aboutspacer").show();
  	}
   	$("#about").show();
}

function hideAbout() {
	if ($(document).width() > threshold) {
		$("#aboutbutton").css("background-color", "#F5F5F5");
		$("#aboutbutton").css("border-right", "1px solid #EAEAEA");
		$("#aboutbutton").css("border-left", "0px");
		$("#aboutbutton").css("border-top", "0px");
		$("#aboutbutton").css("border-bottom", "0px");
	  	$(".about").css("border", "1px solid white");
	}
   	$("#about").fadeOut("fast");
}

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

