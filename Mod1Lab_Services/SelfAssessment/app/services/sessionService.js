'use strict';
angular.module('app').service('sessionService',['$window',

    function ($window){
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
        function instance(){
            this.save = _save;
            this.get = _get;
            this.clear = _clear;
        }


        return {
            Instance: instance
        }
    }
]);