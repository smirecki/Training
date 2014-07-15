var tidalReportControllers = angular.module('tidalReportControllers', []);


tidalReportControllers.controller('LocationListCtrl', ['$scope', 'Location',
  function($scope, Location) {
  	$scope.locations = Location.query();
  }]);

tidalReportControllers.controller('LocationDetailCtrl', ['$scope', '$routeParams', 'Location',
  function($scope, $routeParams, Location) {
  	$scope.location = Location.get({stationID: $routeParams.stationID}, function(location){
  		$scope.mainImageUrl = location.image[0];
  	});

  	$scope.setImage = function(imageURL) {
  		$scope.mainImageUrl = imageUrl;
  	}
  }]);

/*
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

  */