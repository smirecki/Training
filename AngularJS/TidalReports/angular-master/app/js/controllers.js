'use strict';

/* Controllers */

var tidalReportApp = angular.module('tidalReportApp', []);


  tidalReportApp.controller('TideListCtrl', function ($scope) {
  	$scope.locations = [
		{"name": "San Diego",   "high": "2014-06-23T08:25:43.511Z", "low": "2014-06-23T20:20:43.511Z"},
		{"name": "Los Angeles", "high": "2014-06-23T08:10:00.511Z", "low": "2014-06-23T20:10:00.511Z"},
		{"name": "Miami",       "high": "2014-06-23T11:00:00.511Z", "low": "2014-06-23T23:00:00.511Z"},
		{"name": "New York",    "high": "2014-06-23T11:25:43.511Z", "low": "2014-06-23T23:25:43.511Z"}
	];
  });
