'use strict';

/* @ngInject */
module.exports =  function breedCharacteristics () {
  return {
    templateUrl: "breedCharacteristics.html",
    scope:{
      dog:"="
    },
    replace: true,
    link: function($scope) {
      // console.log(scope.movieData);
      $scope.isReadOnly = true;
     
    }
  };
};