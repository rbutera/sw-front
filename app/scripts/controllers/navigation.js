'use strict';

var app = angular.module('swFrontApp');

app.controller('NavigationController', ['$scope', '$location', function($scope, $location){
  $scope.isActive = function(path) {
    return path === $location.path();
  };  
}]);