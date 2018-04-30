'use strict';

/* @ngInject */
module.exports = function breedSelectorCtrl($scope, homeFactory, $q, $state, $http, AppSettings) {

  var totalItems = 0, itemsLoaded = 0, nextPageIndex = 0;
  $scope.tileArray = [];
  $scope.showHomeButon = true;
  
  $scope.searchText = "";
  
  function init(){
    $scope.isLoading = false;
    $scope.loadNextPage();
  }

  $scope.goToHome = function()
  {
    $state.go('home',
      
      { inherit: true, reload: false, notify: false }
    );
  };

  $scope.loadNextPage = function(){
    
    if($scope.isLoading ||  itemsLoaded >= totalItems && nextPageIndex !== 0){
      return;
    }
    $scope.isLoading = true;
    $q.when(homeFactory.getDogList())
    .then(function(result){
      $scope.isLoading = false;
      $scope.tileArray = result.data;
      $scope.resultTileArray = $scope.tileArray;
    })
    .catch(function () {
      console.log("error in reading data");
    })
    .finally(function () {
      
    });
  };

 
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
///////////////////////////////////////////////////
  $scope.formParams = { energy:"0", size: "0",
                      trainability : "0",
                      intelligence : "0",
                      grooming: "0",
                      playfulness: "0",
                      friendliness: "0"};


  $scope.formDataParams = {min_energy:0, max_energy: 0,
                          min_size:0, max_size: 0,
                          min_trainability:0, max_trainability: 0,
                          min_intelligence:0, max_intelligence: 0,
                          min_grooming:0, max_grooming: 0,
                          min_playfulness:0, max_playfulness: 0,
                          min_friendliness:0, max_friendliness: 0,};
  $scope.stage = "";
  $scope.formValidation = false;
  
  $scope.filterResults =  function(param){
    $scope.resultTileArray = $scope.tileArray;
    $scope.formDataParams["min_" + param] = _.toNumber(_.split($scope.formParams[param], '-')[0]);
    $scope.formDataParams["max_" + param] = _.toNumber(_.isInteger(_.toNumber(_.split($scope.formParams[param], '-')[1])) ? _.split($scope.formParams[param], '-')[1] : 0);

    for (var key in $scope.formParams) {
      if ($scope.formParams.hasOwnProperty(key)) {
         $scope.resultTileArray = _.filter($scope.resultTileArray, function(o) { return (o.dogCharacteristics[key] >= $scope.formDataParams["min_" + key]) ; });
          if($scope.formDataParams["max_" + key] > 0)
          {
            $scope.resultTileArray = _.filter($scope.resultTileArray, function(o) { return (o.dogCharacteristics[key] <= $scope.formDataParams["max_" + key]) ; });
          }
        
      }
    }
    return true;
  }
  
  // Navigation functions
  $scope.next = function (stage) {
    //$scope.direction = 1;
    //$scope.stage = stage;
    
    $scope.formValidation = true;
    
    if ($scope.multiStepForm.$valid) {
      $scope.direction = 1;
      $scope.stage = stage;
      $scope.formValidation = false;
    }
  };

  $scope.back = function (stage) {
    $scope.direction = 0;
    $scope.stage = stage;
  };
  
  // CC email list functions
 
  
  
  // Post to desired exposed web service.
  $scope.submitForm = function () {
    var wsUrl = AppSettings.api_send_mail_url;

    // Check form validity and submit data using $http
    if ($scope.multiStepForm.$valid) {
      $scope.formValidation = false;

      $http({
        method: 'POST',
        url: wsUrl,
        data: JSON.stringify({email: $scope.formParams.email, dog_id: $scope.resultTileArray[0].id,
                      name: $scope.formParams.name,
                       location: '5219 De Zavala Rd, San Antonio, TX 78249'} )
      }).then(function successCallback(response) {
        if (response
          && response.data
         
          && response.status === 200) {
          $scope.stage = "success";
        } else {
          if (response
            && response.data
            && response.data.status
            && response.data.status === 'error') {
            $scope.stage = "error";
          }
        }
      }, function errorCallback(response) {
        $scope.stage = "error";
        console.log(response);
      });
    }
  };
  
  $scope.reset = function() {
    // Clean up scope before destorying
    $scope.formParams = { energy:"0", size: "0",
                      trainability : "0",
                      intelligence : "0",
                      grooming: "0",
                      playfulness: "0",
                      friendliness: "0"};
    $scope.stage = "";
  }
};

