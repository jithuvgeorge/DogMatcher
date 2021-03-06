'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-bootstrap');
require('@uirouter/angularjs');
require('angular-animate');
require('ngmap');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('ng-infinite-scroll');
require('./templates');

window._ = require('lodash');


  var requires = [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngMap',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'infinite-scroll',
    'templates',
    require('./controllers').name,
    require('./factories').name,
    require('./filters').name,
    require('./directives').name
  ];


module.exports = angular.module('app', requires)
.constant('AppSettings', require('./constants'))
.config(require('./on_config'))
.run(require('./on_run'));

