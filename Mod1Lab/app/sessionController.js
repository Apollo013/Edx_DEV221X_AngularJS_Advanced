'use strict';
angular.module('app').controller('sessionController',['$scope', 'sessionService',
    function($scope, sessionService){
        $scope.getServiceSession = function () {
            $scope.model = {
                name: sessionService.get('name'),
                nickname: sessionService.get('nickname'),
                status: 'Retrieved by service on ' + new Date()
            }
        }

        $scope.setServiceSession = function() { 
            sessionService.save('name', $scope.model.name);
            sessionService.save('nickname', $scope.model.nickname);
            $scope.getServiceSession();
        } 

        $scope.clearServiceSession = function() { 
            sessionService.clear();
            $scope.getServiceSession();
        }
    }
]);