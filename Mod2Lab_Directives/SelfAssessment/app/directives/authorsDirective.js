'use strict';

angular.module('app').directive('authors', [
    function(){
        return {
            scope: {
                data: '=',
                action: '&'
            },
            replace: true,
            restrict: 'E',
            template:   '<table class="table table-responsive">' +
                        '<thead><tr><th>Name</th><th>Nationality</th><th>Dates</th><th></th></tr></thead>' +
                        '<tbody>' +
                        '<tr ng-repeat="author in data"><td>{{author.name}}</td><td>{{author.nationality}}</td><td>{{author.date}}</td><td><input type="button" ng-click="action({author:author})" class="btn btn-primary btn-sm" value="Details"></input></td></tr>' +                  
                        '</tbody>' + 
                        '</table>',
            link: function(scope, elem, attr){
            }
        }
    }
]);