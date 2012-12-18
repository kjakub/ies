'use strict';

/* App Controllers */

myApp.controller('NotesShowController',function NotesShowController($scope, Note, $routeParams) {
  $scope.note = Note.get({ id: $routeParams.note_id });


  $scope.saveNote = function(note) {
    note.$update(
      function(success){
        console.log(success);
      },
      function(error){
        console.log(error)
      });
  }

  $scope.destroyNote = function(note) {
    console.log(note)
    note.$delete(function(success){},function(error){});
  }


});