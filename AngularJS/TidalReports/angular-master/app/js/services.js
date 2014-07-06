'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var tidalReportServices = angular.module('tidalReportServices', ['ngResource']);
	
tidalReportServices.factory('location', ['$resource',
	function($resource){
		return $resource('locations/:http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808 15:00&end_date=20130808 15:06&station=8454000&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json', {}, {
			query: {method:'GET', params:{locationId:'locations'}, isArray:true}
		});
	}]);

  value('version', '0.2');

