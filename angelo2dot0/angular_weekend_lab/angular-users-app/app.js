//console.log("hello");
var app = angular.module('angularUsers', ['ui.router', 'ngResource']);

app.config(function ($stateProvider, $urlRouterProvider) {
  // if the path doesn't match any of the urls you configured
  // otherwise will take care of routing the user to the specified url
  $urlRouterProvider.otherwise('/');
  // set up the states
  $stateProvider
	.state('users-index', {
	  	url: "/",
	    templateUrl: 'templates/users-index.html',
	    controller: 'UsersIndexCtrl'
	})
	.state('users-show', {
		url: "/users/:user_id",
		templateUrl: 'templates/users-show.html',
		controller: 'UsersShowCtrl'
	});
});

app.controller('MainCtrl', function ($scope) {
	$scope.message = "Hello World! Welcome to the users's App!";	
});

app.controller('UsersIndexCtrl', function ($scope, User) {
	//$scope.names = ['Betsy', 'Norman', 'Sonja', 'Joshua'];
	$scope.users = User.query();
	
	$scope.addUser = function() {
		//console.log($scope.newUser);
		User.save($scope.newUser, function (data) {
			//$scope.users.push($scope.newUser);
			$scope.users.push(data);
			$scope.newUser = {};
		});
	};
});

app.controller('UsersShowCtrl', function ($stateParams, $scope, User, $http) {
	//console.log($stateParams.user_id);
	//$scope.user_id = $stateParams.user_id;
	
	User.get({ id: $stateParams.user_id }, function (data) {
		$scope.user = data;
		getGifs(data.firstname);
	});
	
	function getGifs(firstName) {
		var query = 'http://api.giphy.com/v1/gifs/search?q=' + firstName + '&api_key=dc6zaTOxFJmzC';
		$http.get(query).then(
			function (data) {
				$scope.gifs = data.data.data;
				//console.log(data.data.data);
			},
			function (error) {
				console.log(error);
			}
		);
	}
});

app.factory('User', function ($resource) {
	var HOST = 'http://api.randomuser.me/?results=2000';
	return $resource (HOST + '/users/:id', { id: '@id' });
});
