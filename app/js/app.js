'use strict';

/* App Module */

var annoncesApp = angular.module('annoncesApp', [ 'ngRoute',
		'annoncesControllers', 'offerServices' ]);

annoncesApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl : 'partials/list.html',
		controller : 'listCtrl'
	}).when('/personne', {
		templateUrl : 'partials/personne.html',
		controller : 'personneCtrl'
	}).otherwise({
		redirectTo : '/list'
	});
} ]);


//annoncesApp.config(['$httpProvider', function($httpProvider) {
//    $httpProvider.defaults.useXDomain = true;
//    delete $httpProvider.defaults.headers.common['X-Requested-With'];
//}
//]);
