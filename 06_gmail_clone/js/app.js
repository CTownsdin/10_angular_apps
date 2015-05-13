'use strict';
var app = angular.module('EmailApp', [ 'ngRoute', 'ngSanitize' ]);
 
app.config(function($routeProvider){
  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxController',
      controllerAs: 'inbox'
    })
    .when('/inbox/email/:id', {
      templateUrl: 'views/email.html',
      controller: 'EmailController',
      controllerAs: 'email'
    })
    // .when('/')
    .otherwise({ redirectTo: '/inbox' });
  
});

// For debugging purposes.
app.run(function($rootScope) {
  $rootScope.$on('$routeChangeError', function(event, current,
    previous, rejection){
    console.log(event, current, previous, rejection);
  });
});


