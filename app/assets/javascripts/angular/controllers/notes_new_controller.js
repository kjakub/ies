'use strict';

/* App Controllers */

myApp.controller('NotesNewController',function NotesNewController($scope,Note,$location) {

  $scope.note = new Note();
  $scope.note.destinations = {};
  $scope.destinations = ['AllSchool','AllYear','A1','A2']

  $scope.saveNote = function() {
    $scope.modalDestination = false;
    Note.save($scope.note, function(note) {
    //$scope.note.$save(function(note) {
      $location.path('/notes/' + note.id);
    });
  }

  $scope.openModal = function() {
    $scope.modalDestination = true;

  } 

  $scope.sendNote = function() {
    console.log($scope.note)
    
    $scope.saveNote();
  }  


});