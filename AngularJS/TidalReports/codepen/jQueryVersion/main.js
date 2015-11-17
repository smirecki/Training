// All of this is ng that will need to be converted to jQuery and maybe a templating language

$("document").ready(function(){
  $('#oneButton').bind('click', getJsonFromServer);
  console.log("1");
});

function getJsonFromServer() {
  console.log("2");
  var dataInput = $("data").val();
  console.log(dataInput);
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?t=" + "Alien",
    datatype: "json",
    success: postToPage
    });
}

function postToPage(data) {
  console.log("3");
  console.log(data);
  $.each(data, function(index, value) {
    console.log(index + ": " + value);
  });
  $.each(data, function(){
    var Title = $(this).find('Title').text();
    $('<div class="Title"></div>').html('Title').appendTo('#main-info');
  });
}
  /*
  var id = $(this).attr('id');
  var Title = $(this).find('Title').text();
  var Year = $(this).find('Year').text();
  var Rated = $(this).find('Rated').text();
  var Released = $(this).find('Released').text();
  var Runtime = $(this).find('Runtime').text();
  var Genre = $(this).find('Genre').text();
  var Director = $(this).find('Director').text();
  var Writer = $(this).find('Writer').text();
  var Actors = $(this).find('Actors').text();
  var Plot = $(this).find('Plot').text();
  var Language = $(this).find('Language').text();
  var Country = $(this).find('Country').text();
  var Awards = $(this).find('Awards').text();
  var Poster = $(this).find('Poster').text();
  var Metascore = $(this).find('Metascore').text();
  var imdbRating = $(this).find('imdbRating').text();
  var imdbVotes = $(this).find('imdbVotes').text();
  var imdbID = $(this).find('imdbID').text();
  var Type = $(this).find('Type').text();
  var tomatoMeter = $(this).find('tomatoMeter').text();
  var tomatoImage = $(this).find('tomatoImage').text();
  var tomatoRating = $(this).find('tomatoRating').text();
  var tomatoReviews = $(this).find('tomatoReviews').text();
  var tomatoFresh = $(this).find('tomatoFresh').text();
  var tomatoRotten = $(this).find('tomatoRotten').text();
  var tomatoConsensus = $(this).find('tomatoConsensus').text();
  var tomatoUserMeter = $(this).find('tomatoUserMeter').text();
  var tomatoUserRating = $(this).find('tomatoUserRating').text();
  var tomatoUserReviews = $(this).find('tomatoUserReviews').text();
  var DVD = $(this).find('DVD').text();
  var BoxOffice = $(this).find('BoxOffice').text();
  var Production = $(this).find('Production').text();
  var Website = $(this).find('Website').text();
  var Response = $(this).find("Response").text();
  $('<div class="Title"></div>').html('Title').appendTo('#main-info');
  $('<div class="Year"></div>').html('Year').appendTo('#main-info');
  $('<div class="Rated"></div>').html('Rated').appendTo('#main-info');
  $('<div class="Released"></div>').html('Released').appendTo('#main-info');
  $('<div class="Runtime"></div>').html('Runtime').appendTo('#main-info');
  $('<div class="Genre"></div>').html('Genre').appendTo('#main-info');
  $('<div class="Director"></div>').html('Director').appendTo('#main-info');
  $('<div class="Writer"></div>').html('Writer').appendTo('#main-info');
  $('<div class="Actors"></div>').html('Actors').appendTo('#main-info');
  $('<div class="Plot"></div>').html('Plot').appendTo('#main-info');
  $('<div class="Language"></div>').html('Language').appendTo('#main-info');
  $('<div class="Country"></div>').html('Country').appendTo('#main-info');
  $('<div class="Awards"></div>').html('Awards').appendTo('#main-info');
  $('<div class="Poster"></div>').html('Poster').appendTo('#main-info');
  $('<div class="Metascore"></div>').html('Metascore').appendTo('#main-info');
  $('<div class="imdbRating"></div>').html('imdbRating').appendTo('#main-info');
  $('<div class="imdbVotes"></div>').html('imdbVotes').appendTo('#main-info');
  $('<div class="imdbID"></div>').html('imdbID').appendTo('#main-info');
  $('<div class="Type"></div>').html('Type').appendTo('#main-info');
  $('<div class="tomatoMeter"></div>').html('tomatoMeter').appendTo('#main-info');
  $('<div class="tomatoImage"></div>').html('tomatoImage').appendTo('#main-info');
  $('<div class="tomatoRating"></div>').html('tomatoRating').appendTo('#main-info');
  $('<div class="tomatoReviews"></div>').html('tomatoReviews').appendTo('#main-info');
  $('<div class="tomatoFresh"></div>').html('tomatoFresh').appendTo('#main-info');
  $('<div class="tomatoRotten"></div>').html('tomatoRotten').appendTo('#main-info');
  $('<div class="tomatoConsensus"></div>').html('tomatoConsensus').appendTo('#main-info');
  $('<div class="tomatoUserMeter"></div>').html('tomatoUserMeter').appendTo('#main-info');
  $('<div class="tomatoUserRating"></div>').html('tomatoUserRating').appendTo('#main-info');
  $('<div class="tomatoUserReviews"></div>').html('tomatoUserReviews').appendTo('#main-info');
  $('<div class="DVD"></div>').html('DVD').appendTo('#main-info');
  $('<div class="BoxOffice"></div>').html('BoxOffice').appendTo('#main-info');
  $('<div class="Production"></div>').html('Production').appendTo('#main-info');
  $('<div class="Website"></div>').html('Website').appendTo('#main-info');
  $('<div class="Response"></div>').html("Response").appendTo('#main-info');
//  }
//  );
}
*/













//OLD ng
/*
angular.module('myApp', [])
  .controller('MovieController', function($scope, $http) {
    var pendingTask;

    if ($scope.search === undefined) {
      $scope.search = "Sherlock Holmes";
      fetch();
    }

    $scope.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

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

    $scope.update = function(movie) {
      $scope.search = movie.Title;
      $scope.change();
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });

*/