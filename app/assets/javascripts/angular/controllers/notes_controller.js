'use strict';

/* App Controllers */

myApp.controller('NotesController',function NotesController($scope, Note) {
  $scope.notes = Note.index({}, function(data){
    console.log('success, got data: ', data);
    $scope.response = "yoy!"
  }, function(err){
    console.log('error, got data: ', err);
    $scope.response = "yay!"
  }
  ); 
});