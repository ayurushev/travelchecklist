/*
	TODO:
	- select all on focus - done
	- summarize steps only if "done" is set - done
	- move currency to travel object
*/
var app = angular.module('app', ['ui.router', 'ngMaterial', 'ngAnimate', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
	$stateProvider.state('travels', {
		url: '/',
		templateUrl: 'partials/travels.html',
		controller: 'TravelsController'
	}).state('travel', {
		url: '/?id',
		templateUrl: 'partials/travel.html',
		controller: 'TravelController'
	});
	$urlRouterProvider.when('/', '/home');
	$urlRouterProvider.otherwise('/')
	//$locationProvider.html5Mode(true);

	$mdThemingProvider.theme('yellow-dark', 'default').primaryPalette('yellow').dark();
}]);

app.run(['$transitions', function($transitions) {
	$transitions.onSuccess({}, function(trans) {
    //
	});
}]);
