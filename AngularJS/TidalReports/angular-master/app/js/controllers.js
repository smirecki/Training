var tidalReportControllers = angular.module('tidalReportControllers', [app.angularGit]);

tidalReportControllers.controller('TideListCtrl', function($scope, AngularGit){

	var params = {category: 'commits', sha: '1234'}

	console.log(AngularGit.get(params))
});

angular.module('app.angularGit', ['ngResource'])
  .factory('AngularGit', function($resource) {
  	return $resource('http://tidesandcurrents.noaa.gov/api/:category/:sha')
  })

  //This is a sample adapted from http://youtu.be/1eR8ZPZbhdw