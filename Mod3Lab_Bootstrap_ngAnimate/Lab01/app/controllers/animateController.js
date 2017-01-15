'use strict';

angular.module('app').controller('animateController', ['$scope','$timeout',
    function($scope, $timeout){
        $scope.fadeCondition = false;
        $timeout(function(){
            $scope.fadeCondition = true;
        },2000)
    }
]);