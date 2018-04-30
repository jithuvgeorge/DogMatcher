'use strict';

/* @ngInject */
module.exports =  function imageGallary(AppSettings) {
  return {
    templateUrl: "gallary.html",
    scope:{
      slides:"="
    },
    replace: true,
    link: function(scope) {
      // console.log(scope.movieData);
      scope.missingIcon = "images/"+ AppSettings.default_image;
     
    }
  };
};