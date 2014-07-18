'use strict';

/* Services */

var tidalReportServices = angular.module('tidalReportServices', ['ngResource']);
	
tidalReportServices.factory('Location', ['$resource',
	function($resource){
		return $resource('locations/:stationID.json', {}, {
			query: {method:'GET', params:{stationID:'locations'}, isArray:true}
		});
}]);
/*  Temp --- Building API Call Service */
tidalReportServices.factory('NoaaAPI', ['$resource',
	function($resource){
		return $resource('http://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&begin_date=20140716+12%3A00&end_date=20140717+23%3A59&datum=MLLW&station=9414290&time_zone=LST_LDT&units=english&format=json&interval=h&application=TestApp', {}, {
			query: {method:'GET', isArray:true},
			save: {method:'POST'}
		});
}]);