'use strict';

/* App Controllers */

myApp.controller('NavbarController', function ($scope, $location) {
  $scope.routeIs = function(routeName) {
    return $location.path() === routeName;
  };

});