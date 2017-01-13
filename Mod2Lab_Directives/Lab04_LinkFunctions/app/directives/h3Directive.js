'use strict';

angular.module('app').directive('h3MessageDirective', [
    function(){
        return {
            scope: {
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: '<h3>{{ title }}</h3>',
            link : function (scope, elem, attr){
                elem.bind('mouseenter', function(){
                    elem.css('background-color','blue');
                });

                elem.bind('mouseleave', function(){
                    elem.css('background-color','violet');
                });
            }
        }
    }
]);