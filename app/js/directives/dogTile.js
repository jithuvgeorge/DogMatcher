'use strict';

/* @ngInject */
module.exports =  function dogTile(AppSettings, $state) {
  return {
    templateUrl: "tile.html",
    scope:{
      breedInfo:"="
    },
    replace: true,
    link: function(scope) {
      // console.log(scope.movieData);
      scope.icon = scope.breedInfo.dogImageInfo[0].image_url;
      scope.missingIcon = "images/"+ AppSettings.default_image;
      scope.name = scope.breedInfo.breed_name;
      scope.id = scope.breedInfo.id;

      scope.goToBreed = function(value){
      $state.go('breed',
        {breed_id: value, showMap: true},
          { inherit: true, reload: true, notify: false }
        );
      };
    }
  };
};