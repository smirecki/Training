var tidalReportControllers = angular.module('tidalReportControllers', []);

tidalReportControllers.controller('TideListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('locations.json').success(function(data) {
      $scope.locations = data;
    });

    $scope.orderProp = 'name';
  }]);

tidalReportControllers.controller('TideDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.locationId = $routeParams.locationId;
  }]);