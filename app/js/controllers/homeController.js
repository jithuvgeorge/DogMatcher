'use strict';

/* @ngInject */
module.exports = function homeCtrl($scope, homeFactory, $q, $state) {

  $scope.showHomeButon = false;
 
  $scope.searchText = "";
  
  function init(){
    $scope.isLoading = false;
   
  }

  // Any function returning a promise object can be used to load values asynchronously
  $scope.searchDogs = function(searchKey) {
    return homeFactory.getSearchList(searchKey);
  };

  $scope.goToBreed = function(value){
    $state.go('breed',
      {breed_id:value.id, showMap: false},
      { inherit: true, reload: true, notify: false }
    );
  };
  
  
  init();
};

