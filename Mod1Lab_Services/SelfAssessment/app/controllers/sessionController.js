'use strict';
angular.module('app').controller('sessionController',['$scope', 'sessionService', 'sessionFactory',
    function($scope, sessionService, sessionFactory){        
        /*****************************************************************************************
            SERVICE METHODS
        *****************************************************************************************/
        /*----------------------------------------------------------------------------------------
            Create a new instance of the session service
        ----------------------------------------------------------------------------------------*/  
        var sesh = new sessionService.Instance();

        /*----------------------------------------------------------------------------------------
            Saves name & nickname in the session object
        ----------------------------------------------------------------------------------------*/         
        $scope.getServiceSession = function () {
            $scope.model = {
                name: sesh.get('name'),
                nickname: sesh.get('nickname'),
                status: 'Retrieved by service on ' + new Date()
            }
        }

        /*----------------------------------------------------------------------------------------
            Accesses name & nickname from the session object
        ----------------------------------------------------------------------------------------*/ 
        $scope.setServiceSession = function() { 
            sesh.save('name', $scope.model.name);
            sesh.save('nickname', $scope.model.nickname);
            $scope.getServiceSession();
        } 

        /*----------------------------------------------------------------------------------------
            Clears name & nickname values in the session object
        ----------------------------------------------------------------------------------------*/ 
        $scope.clearServiceSession = function() { 
            sesh.clear();
            $scope.getServiceSession();
        }

        /*****************************************************************************************
            FACTORY METHODS (same as above except singleton)
        *****************************************************************************************/
        $scope.getFactorySession = function () {
            $scope.model = {
                name: sessionFactory.get('name'),
                nickname: sessionFactory.get('nickname'),
                status: 'Retrieved by factory on ' + new Date()
            }
        }

        $scope.setFactorySession = function() { 
            sessionFactory.save('name', $scope.model.name);
            sessionFactory.save('nickname', $scope.model.nickname);
            $scope.getFactorySession();
        } 

        $scope.clearFactorySession = function() { 
            sessionFactory.clear();
            $scope.getFactorySession();
        }        
    }
]);