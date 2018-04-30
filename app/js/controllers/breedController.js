'use strict';

/* @ngInject */
module.exports = function breedCtrl($scope, homeFactory, $q, $state) {

 
  $scope.tileArray = [];
  $scope.showHomeButon = true;

  $scope.searchText = "";
  
 
  function init(){
    $scope.isLoading = false;
    $scope.showMap = $state.params.showMap=='true';
    getDogInfo();
  }

  function getDogInfo(){

    $q.when(homeFactory.getDogList())
    .then(function(result){
      $scope.dog = _.find(result.data, { 'id':  _.toNumber($state.params.breed_id )});
    })
    .catch(function () {
      console.log("error in reading data");
    })
    .finally(function () {
     
    });
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
  
  $scope.goToHome = function()
  {
    var target = $state.params.showMap=='true' ? 'breedSelector' : 'home';
    
    $state.go(target,
      
      { inherit: true, reload: false, notify: false }
    );
  };

  $scope.cities = [
    {
      a: { position: [29.49, -98.54], title: "Juvans pet shop"},
      e: { position: [29.53, -98.62], title: "The Ark - Pet Market"},
      i: { position: [29.57, -98.59], title: "Barker Shop"},
      p: { position: [29.43, -98.62], title: "Skippy Doo's Pet Store"}
    },
    {
      b: { position: [29.50, -98.53], title: "Amy's dogs"},
      l: { position: [29.47, -98.51], title: "Puppy Love"},
      o: { position: [29.44, -98.54], title: "Pounce n' Play Pet Store"}
    },
    {
      h: { position: [29.56, -98.55], title: "Freaking Hot Dogs"},
      i: { position: [29.57, -98.59], title: "Barker Shop"},
      n: { position: [29.45, -98.61], title: "Wildwood Exotic Pets"}
    },
    {
      f: { position: [29.54, -98.63], title: "Bark 'n Bubbles"},
      g: { position: [29.55, -98.61], title: "Dogmatic - Animal Shelter"},
      m: { position: [29.46, -98.52], title: "Pets Unleashed"}
    },
    {
      d: { position: [29.52, -98.51], title: "Treats on a Leash"},
      e: { position: [29.53, -98.62], title: "The Ark - Pet Market"}
    },
    {
      e: { position: [29.53, -98.62], title: "The Ark - Pet Market"},
      f: { position: [29.54, -98.63], title: "Bark 'n Bubbles"},
      h: { position: [29.56, -98.55], title: "Freaking Hot Dogs"}
    },
    {
      a: { position: [29.49, -98.54], title: "Juvans pet shop"},
      n: { position: [29.45, -98.61], title: "Wildwood Exotic Pets"},
      o: { position: [29.44, -98.54], title: "Pounce n' Play Pet Store"}
    },
    {
      m: { position: [29.46, -98.52], title: "Pets Unleashed"},
      n: { position: [29.45, -98.61], title: "Wildwood Exotic Pets"},
      o: { position: [29.44, -98.54], title: "Pounce n' Play Pet Store"},
      p: { position: [29.43, -98.62], title: "Skippy Doo's Pet Store"}
    },
    {
      a: { position: [29.49, -98.54], title: "Juvans pet shop"},
      b: { position: [29.50, -98.53], title: "Amy's dogs"},
      p: { position: [29.43, -98.62], title: "Skippy Doo's Pet Store"}
    },
    {
      l: { position: [29.47, -98.51], title: "Puppy Love"},
      e: { position: [29.53, -98.62], title: "The Ark - Pet Market"},
      p: { position: [29.43, -98.62], title: "Skippy Doo's Pet Store"}
    }];

    $scope.getCities = function(id){
      var index1 = id % 10;
      return $scope.cities[index1];
    }

    $scope.getRadius = function(num) {
      return Math.sqrt(num) * 100;
    }

  init();
};

/*
a: { position: [29.49, -98.54], title: "Juvans pet shop"},
b: { position: [29.50, -98.53], title: "Amy's dogs"},
c: { position: [29.51, -98.52], title: "The Bark Station - Pets"},
d: { position: [29.52, -98.51], title: "Treats on a Leash"},
e: { position: [29.53, -98.62], title: "The Ark - Pet Market"},
f: { position: [29.54, -98.63], title: "Bark 'n Bubbles"},
g: { position: [29.55, -98.61], title: "Dogmatic - Animal Shelter"},
h: { position: [29.56, -98.55], title: "Freaking Hot Dogs"},
i: { position: [29.57, -98.59], title: "Barker Shop"},
j: { position: [29.58, -98.63], title: "Bow, Meow, &amp; Squeak!"},
k: { position: [29.48, -98.54], title: "Pugs and Bugs - Animal Shelter"},
l: { position: [29.47, -98.51], title: "Puppy Love"},
m: { position: [29.46, -98.52], title: "Pets Unleashed"},
n: { position: [29.45, -98.61], title: "Wildwood Exotic Pets"},
o: { position: [29.44, -98.54], title: "Pounce n' Play Pet Store"},
p: { position: [29.43, -98.62], title: "Skippy Doo's Pet Store"},
*/