'use strict';

/* Controllers */

var annoncesControllers = angular.module('annoncesControllers', []);

annoncesControllers.controller('listCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/annonces.json').success(function(data) {
      $scope.annonces = data;
    });

    $scope.orderProp = 'sujet';
  }]);
