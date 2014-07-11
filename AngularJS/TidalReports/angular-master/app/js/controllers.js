var tidalReportApp = angular.module('tidalReportApp', []);

tidalReportApp.controller('TideListCtrl', function ($scope) {
	$scope.locations = [
	{"name": "Mullet Key, Tampa Bay, FL",
	 "Station ID": "8726364",
	 "Time Meridian": "75 W",
	 "Latitude": "27 36.9 N",
	 "Longitude": "82 43.6 W",
	 "high_1": "2014-06-23T00:25:43.511Z", 
	 "low_1": "2014-06-23T03:45:43.511Z",
	 "high_2": "2014-06-23T10:30:43.511Z",
	 "low_2": "2014-06-23T18:04:43.511Z"},

	{"name": "Los Angeles, CA",
	 "Station ID": "9410660",
	 "Time Meridian": "120 W",
	 "Latitude": "33 43.2 N",
	 "Longitude": "118 16.3 W",
	 "high_1": "2014-06-23T02:46:43.511Z", 
	 "low_1": "2014-06-23T09:07:43.511Z",
	 "high_2": "2014-06-23T13:52:43.511Z",
	 "low_2": "2014-06-23T20:15:43.511Z"},

	 {"name": "San Diego, CA",
	 "Station ID": "9410170",
	 "Time Meridian": "120 W",
	 "Latitude": "32 42.8 N",
	 "Longitude": "117 10.4 W",
	 "high_1": "2014-06-23T02:39:43.511Z", 
	 "low_1": "2014-06-23T08:57:43.511Z",
	 "high_2": "2014-06-23T13:54:43.511Z",
	 "low_2": "2014-06-23T20:16:43.511Z"},

	 {"name": "San Francisco, CA ",
	 "Station ID": "9414290",
	 "Time Meridian": "120 W",
	 "Latitude": "37 48.4",
	 "Longitude": "122 27.9",
	 "high_1": "2014-06-23T04:31:43.511Z", 
	 "low_1": "2014-06-23T11:41:43.511Z",
	 "high_2": "2014-06-23T16:06:43.511Z",
	 "low_2": "2014-06-23T22:28:43.511Z"},

	 {"name": "Virginia Key, FL",
	 "Station ID": "8723214",
	 "Time Meridian": "75 W",
	 "Latitude": "25 43.8 N",
	 "Longitude": "80 9.7 W",
	 "high_1": "2014-06-23T01:28:43.511Z", 
	 "low_1": "2014-06-23T07:35:43.511Z",
	 "high_2": "2014-06-23T13:54:43.511Z",
	 "low_2": "2014-06-23T20:20:43.511Z"},

	 {"name": "The Battery, NY",
	 "Station ID": "8518750",
	 "Time Meridian": "75 W",
	 "Latitude": "40 42.0",
	 "Longitude": "74 0.8 N",
	 "high_1": "2014-06-23T01:08:43.511Z", 
	 "low_1": "2014-06-23T06:50:43.511Z",
	 "high_2": "2014-06-23T13:11:43.511Z",
	 "low_2": "2014-06-23T19:13:43.511Z"},

	 {"name": "Charleston, SC ",
	 "Station ID": "8665530",
	 "Time Meridian": "75 W",
	 "Latitude": "32 46.9",
	 "Longitude": "79 55.5 N",
	 "high_1": "2014-06-23T00:37:43.511Z", 
	 "low_1": "2014-06-23T06:17:43.511Z",
	 "high_2": "2014-06-23T12:36:43.511Z",
	 "low_2": "2014-06-23T19:07:43.511Z"}

	];
});


  //This is a sample adapted from http://youtu.be/1eR8ZPZbhdw