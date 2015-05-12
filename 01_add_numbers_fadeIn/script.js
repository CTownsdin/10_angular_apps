'use strict';

var app = angular.module('app', ['ngAnimate']);

app.controller('mainController', function($scope){
  $scope.numbers = [0,1,2];
  
  // add a number to the list for repeating on the page.
  $scope.addNumber = function(){
    $scope.numbers.push($scope.numbers.length);
  }; 
});
