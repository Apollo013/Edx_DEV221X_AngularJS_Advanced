'use strict';

angular.module('app').controller('labController', [ '$scope',
    function($scope){
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);

        $scope.today = function() {
            $scope.currentDate = new Date();
        };

        $scope.today();

        $scope.clear = function() {
            $scope.currentDate = null;
        };

        $scope.options = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: false
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
            mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function() {
            $scope.options.minDate = $scope.options.minDate ? null : new Date();
        };

        $scope.toggleMin();

        $scope.setDate = function(year, month, day) {
            $scope.currentDate = new Date(year, month, day);
        };

        $scope.events = [
            {
            date: tomorrow,
            status: 'full'
            },
            {
            date: afterTomorrow,
            status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
            mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                    }
                }
            }
            return '';
        }
    }
]);