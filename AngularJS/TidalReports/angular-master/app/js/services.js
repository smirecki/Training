'use strict';

/* Services */

var tidalReportServices = angular.module('tidalReportServices', ['ngResource']);
	
tidalReportServices.factory('Location', ['$resource',
	function($resource){
		return $resource('locations/:stationID.json', {}, {
			query: {method:'GET', params:{stationID:'locations'}, isArray:true}
		});

/*  Temp --- Building API Call Service
tidalReportServices.factory('NoaaAPI', ['$resource',
	function($resource){
		return $resource('http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=:BeginDate&end_date=:EndDate&station=:StationNumber&product=:ProductType&units=UnitsLanguage&time_zone=:TimeZone&application=:ApplicationName&format=json', {}, {
			query: {method:'GET', params:{
				BeginDate :'',
				EndDate :'',
				StationNumber : '',
				ProductType : '',
				UnitsLanguage : 'english',
				TimeZone : '',
				ApplicationName : 'tidalReportApp'
				


		    }, isArray:true}
		});
*/
	}]);