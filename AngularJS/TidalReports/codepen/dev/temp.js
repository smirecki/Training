http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808 15:00&end_date=20130808 15:06&station=8454000&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json

http://tidesandcurrents.noaa.gov/api/datagetter?
    begin_date=20130808 15:00&end_date=20130808 15:06&
    station=8454000&
    product=water_temperature&
    units=english&
    time_zone=gmt&
    application=ports_screen&
    format=json

 $http.get("http://tidesandcurrents.noaa.gov/api/datagetter?date=recent" + 
        station
         $scope.search + 
        "product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json")



function fetch() {
      $http.get("http://tidesandcurrents.noaa.gov/api/datagetter?" + $scope.search + "&tomatoes=true&plot=full")
        .success(function(response) {
          $scope.details = response;
        });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
        .success(function(response) {
          $scope.related = response;
        });
    }







====================
function fetch() {
      $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
        .success(function(response) {
          $scope.details = response;
        });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
        .success(function(response) {
          $scope.related = response;
        });
    }