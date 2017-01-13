'use strict';
angular.module('app').factory('formattingFactory',['$window',
    function($window){
        /*----------------------------------------------------------------------------------------
            String formatter -> Returns uppercase string if number of characters are even, 
                                lowercase otherwise.
        ----------------------------------------------------------------------------------------*/        
        function _format(property){
            return (property.length % 2 == 0) ? property.toUpperCase() : property.toLowerCase();
        };

        /*----------------------------------------------------------------------------------------
            Expose service functionality
        ----------------------------------------------------------------------------------------*/
        var service = {
            format: _format
        };

        return service;
    }
]);