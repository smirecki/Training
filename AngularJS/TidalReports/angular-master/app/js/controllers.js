var tidalReportAppControllers = angular.module('tidalReportAppControllers', []);

  tidalReportAppControllers('TideListCtrl', ['$scope', 'location', function($scope, location) {
  	$scope.locations = location.query();
  	$scope.orderProp = 'name';
  }];

tidalReportAppControllers.controller('locationDetailCtrl', ['$scope', '$routeParams', 'location', function($scope, $routeParams, location){
	  $scope.location = location.get({locationId: $routeParams.locationId},
	  	function(location) {
	  		$scope.mainImageUrl = location.images[0];
	  	});

$scope.setImage = function(imageUrl) {
	$scope.mainImageUrl = imageUrl;
}
}]);