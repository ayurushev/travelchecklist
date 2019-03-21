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
	$urlRouterProvider.otherwise('/');

	$mdThemingProvider.theme('yellow-dark', 'default').primaryPalette('yellow').dark();
}]);
