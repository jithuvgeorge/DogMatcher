'use strict';

module.exports = angular.module('app.directives', [])
.directive('imageGallary', require('./imageGallary.js'))
.directive('dogTile', require('./dogTile'))
.directive('breedCharacteristics', require('./breedCharacteristics.js'))
.directive('errSrc', require('./errSrc'));