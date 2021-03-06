angular.module('beerApp', ['ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				controller: 'listCtrl',
				templateUrl: 'app/list/list.html'
			})
			.when('/beers/new', {
				controller: 'addCtrl',
				templateUrl: 'app/add/add.html'
			})
			.when('/beers/:id', {
				controller: 'singleBeerCtrl',
				templateUrl: 'app/single/single.html'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	});
