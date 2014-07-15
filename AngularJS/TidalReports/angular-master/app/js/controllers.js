var tidalReportControllers = angular.module('tidalReportControllers', []);

tidalReportControllers.controller('LocationListCtrl', ['$scope', '$http',
	function ($scope, $http) {
	$http.get('locations/locations3.json').success(function(data) {
		$scope.locations = data;
	});

}]);

tidalReportControllers.controller('LocationDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('locations/' + $routeParams.stationID + '.json').success(function(data) {
      $scope.location = data;
    });
  }]);