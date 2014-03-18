var offerServices = angular.module('offerServices', ['ngResource']);

offerServices.factory('Offer', ['$resource',function($resource){      
         return $resource('http://127.0.0.1:3080/wsLunch/authentication/ivan/Ricardo', {}, {                    query: {method:'GET', params:{}, isArray:true}                   
                });           
  }]);