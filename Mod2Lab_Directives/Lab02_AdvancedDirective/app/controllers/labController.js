'use strict';
angular.module('app').controller('labController',['$scope',
    function($scope){
        $scope.person = {
            name: 'Samuel Clemens',
            penName: 'Mark Twain'
        };
    }
]);