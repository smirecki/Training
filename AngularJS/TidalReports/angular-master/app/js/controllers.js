var tidalReportApp = angular.module('tidalReportApp', []);

tidalReportApp.controller('TideListCtrl', ['$scope', '$http',
	function ($scope, $http) {
	$http.get('locations3.json').success(function(data) {
		$scope.locations = data;
	});

}]);