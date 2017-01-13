'use strict';
angular.module('app').directive('staticMessageDirective', [
    function () {
        return {
            restrict: 'EA',
            template: '<h2>This is a template from a directive</h2>'
        };
    }
]);