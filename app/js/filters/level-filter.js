'use strict';

/* @ngInject */
module.exports  = function () {
    return function(originalLevel) {
        var level = "";
        switch (originalLevel) {
            case 1:
                level = 'Low';
                break;
            case 2:
                level = 'Low - Moderate';
                break;
            case 3:
                level = 'Moderate';
                break;
            case 4:
                level = 'Moderate - High';
                break;
            case 5:
                level = 'High';
                break;
        }
        return level;
    };
};