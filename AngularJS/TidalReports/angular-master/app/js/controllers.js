var tidalReportControllers = angular.module('tidalReportControllers', []);


tidalReportControllers.controller('LocationListCtrl', ['$scope', 'Location',
  function($scope, Location) {
  	$scope.locations = Location.query();
  }]);

tidalReportControllers.controller('LocationDetailCtrl', ['$scope', '$routeParams', 'Location',
  function($scope, $routeParams, Location) {
  	$scope.location = Location.get({stationID: $routeParams.stationID}, function(location){
  		$scope.mainImageUrl = location.image;
  	});

  	$scope.setImage = function(imageURL) {
  		$scope.mainImageUrl = imageUrl;
  	}
  }]);


/* Noaa controller - Development stage */
tidalReportControllers.controller('NoaaAPICtrl', ['$scope', 'NoaaAPI',
  function($scope, NoaaAPI) {
    $scope.noaaapi = NoaaAPI.query();
  }]);