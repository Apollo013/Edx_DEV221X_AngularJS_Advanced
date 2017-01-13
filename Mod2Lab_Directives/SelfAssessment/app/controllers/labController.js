'use strict';

angular.module('app').controller('labController', ['$scope',
    function ($scope) {
        $scope.authorsList = [];

        $scope.authorsList.push({name:"Mark Twain", nationality:"American", date:"1835-1910"});
        $scope.authorsList.push({name:"A. A. Milne", nationality:"English", date:"1882-1956"});
        $scope.authorsList.push({name:"Ernest Hemingway", nationality:"American", date:"1899-1961"});
        $scope.authorsList.push({name:"Charles Dickens", nationality:"English", date:"1812-1870"});
        $scope.authorsList.push({name:"Jane Austen", nationality:"English", date:"1775-1817"});
        $scope.authorsList.push({name:"Leo Tolstoy", nationality:"Russian", date:"1828-1910"});

        $scope.show = function(author){
            alert(JSON.stringify(author));
        }
    }
]);