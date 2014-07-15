var tidalReportApp = angular.module('tidalReportApp', [
  'ngRoute',
  'tidalReportControllers'
	]);

tidalReportApp.config(['$routeProvider',
  function($routeProvider) {
  	$routeProvider.
  	  when('/locations', {
  	  	templateUrl: 'partials/location-list.html',
  	  	controller: 'LocationListCtrl'
  	  }).
  	  when('/locations/:stationID', {
  	  	templateUrl: 'partials/location-detail.html',
  	  	controller: 'LocationDetailCtrl'
  	  }).
  	  otherwise({
  	  	redirectTo: '/locations'
  	  });
  }]);