var tidalReportControllers = angular.module('tidalReportControllers', []);

tidalReportControllers.controller('LocationListCtrl', ['$scope', '$http',
	function ($scope, $http) {
	$http.get('locations/locations3.json').success(function(data) {
		$scope.locations = data;
	});

}]);

tidalReportControllers.controller('LocationDetailCrtl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.locationsname = $routeParams.locationsname;
	}]);