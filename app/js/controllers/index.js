'use strict';

module.exports = angular.module('app.controllers', [])
.controller('homeController', require('./homeController.js'))
.controller('breedSelectorController', require('./breedSelectorController.js'))
.controller('breedController', require('./breedController.js'));