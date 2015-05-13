'use strict';
var app = angular.module('EmailApp', [ 'ngRoute']);
 
app.config(function($routeProvider){
  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxController',
      controllerAs: 'inbox'
    })
    // .when('/')
    .otherwise({ redirectTo: '/inbox' });
  
});

// app.controller('EmailController', function($scope){
//   $scope.someEmail = 'Hi';
// });


