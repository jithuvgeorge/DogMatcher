'use strict';

/* @ngInject */
module.exports = function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    var states = [
    {
        name: 'home',
        url: '/home',
        /*params: {
            
            '#': null
        },*/
        views: {
            header: {
                controller: 'homeController',
                templateUrl: 'header.html' 
            },
            mainPage: {
                controller: 'homeController',
                templateUrl: 'home.html',
            }
            /*,
            sidebar: {
                controller: 'reportLeftNavController',
                template: require('./left-nav/report-left-nav.html')
            }*/
        },
        title: 'BreedSelector'
    },   
    {
    	name: 'breedSelector',
        url: '/breedSelector',
        /*params: {
            
            '#': null
        },*/
        views: {
            header: {
                controller: 'breedSelectorController',
                templateUrl: 'header.html' 
            },
            mainPage: {
                controller: 'breedSelectorController',
                templateUrl: 'breedSelector.html',
            }
            /*,
            sidebar: {
                controller: 'reportLeftNavController',
                template: require('./left-nav/report-left-nav.html')
            }*/
        },
        title: 'BreedSelector'
    },
    {
        name: 'breed',
        url : '/breed?:breed_id&:showMap',
        views: {
            header: {
                controller: 'breedController',
                templateUrl: 'header.html' 
            },
            mainPage: {
                controller: 'breedController',
                templateUrl: 'breed.html',
            }
        }
    }
    ];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

  	$urlRouterProvider.otherwise('/home');

};