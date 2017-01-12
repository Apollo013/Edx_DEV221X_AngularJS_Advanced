'use strict';
angular.module('app').service('sessionService',['$window',

    function ($window){

        function save(key, value){
            $window.sessionStorage.setItem(key, value);
            console.log('save');
        }

        function get(key){
            console.log('get');
            return $window.sessionStorage.getItem(key);
        }

        function clear(){
            console.log('clear');
            $window.sessionStorage.clear();
        }

        this.save = save;
        this.get = get;
        this.clear = clear;

        //return this;
    }
]);