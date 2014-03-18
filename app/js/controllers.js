'use strict';

/* Controllers */

var annoncesControllers = angular.module('annoncesControllers', []);

annoncesControllers.controller('listCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('data/annonces.json').success(function(data) {
				$scope.annonces = data;
			});

			$scope.orderProp = 'sujet';
		} ]);

annoncesControllers.controller('personneCtrl', [
		'$scope',
		'$http',
		function($scope, $http) {
			$scope.submit = function() {
				var json = $scope.personne;
				$http.post('http://localhost:3000/users', json).success(
						function(data, status, headers, config) {
							$scope.response = data;
						}).error(function(data, status, headers, config) {
					$scope.status = status + ' ' + headers;
				});
			};
		} ]);
