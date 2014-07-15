'use strict';

/* Services */

var tidalReportServices = angular.module('tidalReportServices', ['ngResource']);
	
tidalReportServices.factory('Location', ['$resource',
	function($resource){
		return $resource('locations/:stationID.json', {}, {
			query: {method:'GET', params:{stationID:'locations'}, isArray:true}
		});
	}]);

