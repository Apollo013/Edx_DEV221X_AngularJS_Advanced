'use strict';

angular.module('app').factory('sessionFactory',['$window',
    function($window){
        /*----------------------------------------------------------------------------------------
            Saves a key/value pair
        ----------------------------------------------------------------------------------------*/        
        function _save(key, value) {
            $window.sessionStorage.setItem(key, value);
        }

        /*----------------------------------------------------------------------------------------
            Accesses a value via key
        ----------------------------------------------------------------------------------------*/
        function _get(key) {
            return $window.sessionStorage.getItem(key);
        }

        /*----------------------------------------------------------------------------------------
            Clears all data currently in the session
        ----------------------------------------------------------------------------------------*/
        function _clear() {
            $window.sessionStorage.clear();
        }

        /*----------------------------------------------------------------------------------------
            Expose service functionality
        ----------------------------------------------------------------------------------------*/
        var service = {};
        service.save = _save;
        service.get = _get;
        service.clear = _clear;
        return service;
    }
]);