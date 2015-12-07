/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'myApp.controllers'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('posts', {
        url: "/",
        templateUrl: 'templates/posts-index',
        controller: 'PostsIndexCtrl'
      });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
