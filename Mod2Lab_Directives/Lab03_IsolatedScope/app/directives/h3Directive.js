'use strict';

angular.module('app').directive('h3MessageDirective', [
    function(){
        return {
            scope: {
                title: '@'
            },
            restrict: 'E',
            template: '<h3>{{ title }}</h3>'
        }
    }
]);