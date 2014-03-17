'use strict';

/* App Module */

var annoncesApp = angular.module('annoncesApp', [
  'ngRoute',
  'listControllers'
]);

annoncesApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'listCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);
