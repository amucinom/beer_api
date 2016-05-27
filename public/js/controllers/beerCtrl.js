angular.module('beerApp')
	.controller('beerCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
		$scope.beerData = {};

		$http.get('api/beers')
			.success(function (data) {
				$scope.beers = data;
				console.log(data);
			})
			.error(function (data) {
				console.log('Error: ', data);
			});

	}]);
