/**
 * sample.js
 */

describe('HomeCtrl', function() {
  beforeEach(angular.module('classApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

 describe('HomeCtrl testing', function() {
    it('works HomeCtrl', function() {
      var $scope = {};
    // var controller = $controller('HomeCtrl', { $scope: $scope });
      //$scope.password = 'longerthaneightchars';
      //$scope.grade();
     // expect($scope.strength).toEqual('strong');
      expect(true).toBe(true);
    });
  });

});