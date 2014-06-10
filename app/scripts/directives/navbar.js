'use strict';

var app = angular.module('swFrontApp');

app.directive('navbar', [function () {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  };
}]);