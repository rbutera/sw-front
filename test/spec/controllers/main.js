'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('swFrontApp'));

  var location, scope;

  beforeEach(inject(function($controller, $location, $rootScope){
    location = $location;
    scope = $rootScope.$new();

    $controller('NavigationController', {$scope: scope});
  }));

  describe('isActive', function() {
    it('returns true when paths are same', function() {
      location.path('/test');
      expect(scope.isActive('/test')).toBeTruthy();
    });
    it('returns false when paths differ', function() {
      location.path('/different');
      expect(scope.isActive('/test')).toBeFalsy();
    });
    it('returns true when beginning of multi slash path matches', function() {
      location.path('/test/1');
      expect(scope.isActive('/test')).toBeTruthy();
    });
    it('returns true when beginning of query path matches', function() {
      location.path('/test?q=1');
      expect(scope.isActive('/test')).toBeTruthy();
    });
  });
});
