var tidalReportApp = angular.module('tidalReportApp', []);


  tidalReportApp.controller('TideListCtrl', function ($scope, $http) {
  	$http.get('locations.json').success(function(data){
  		$scope.locations = data;
  	});

  	$scope.orderProp = 'name';
  });