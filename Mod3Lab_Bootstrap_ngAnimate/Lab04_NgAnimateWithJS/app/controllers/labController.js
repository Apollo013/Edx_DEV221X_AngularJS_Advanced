'use strict';

angular.module('app').controller('labController', [ '$scope',
    function($scope){
        $scope.alerts = [];

        $scope.addDanger = function() {
            addAlert('danger', 'Danger, Will Robinson! Danger!');
        };

        $scope.addWarning = function() {
            addAlert('warning', 'Warning! Warning! Alien approaching!');
        };

        $scope.dismissAlert = function(index) {
            $scope.alerts.splice(index, 1);
            $scope.show = false;
            
        };

        function addAlert(type, text) {
            $scope.alerts.push({ type: type, text: text });
        };
    }
]);