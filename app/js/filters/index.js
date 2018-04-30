'use strict';

module.exports = angular.module('app.filter', [])
.filter('levelFilter', require('./level-filter'));