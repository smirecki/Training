'use strict';
/*  --- MOVED TO app.js ---
var app = angular.module("MyApp", ["ngResource"]);

function MyCtrl($scope, $resource) {
	var twitterAPI = $resource("http://search.twitter.com/seach.json",
	  { callback: "JSON_CALLBACK" },
	  { get: { method: "JSONP" }});

	$scope.search = function() {
		$scope.searchResults = TwitterAPI.get({ q: $scope.searchTerm});
	};
}
*/