/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //POSTS
  .controller('PostsIndexCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    
    $http.get("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC")
    .success(function(response) {
      $scope.gifs = response.data;
    })
    .error(function(response) {
      alert("error: ", response);
    });

    $scope.searchGifs = function() { 
      $http.get("http://api.giphy.com/v1/gifs/search?q=" + $scope.term + "&api_key=dc6zaTOxFJmzC")
        .success(function(response) {
          $scope.gifs = response.data;
        })
        .error(function(response) {
          alert("error: ", response);
      });
    };
    $scope.deleteGif = function(gif) {
      var index = $scope.gifs.indexOf(gif);
      $scope.gifs.splice(index,1);
    };

  }]);
