
(function(){
    var app = angular.module("githubViewer");
    var MainCtrl = function(
            $scope, $interval, 
            $log, $location) {

        

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        $scope.search = function(username){
            if(countdownInterval)
                $interval.cancel(countdownInterval);
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };
        
        $scope.username = "angular";
        $scope.countdown = 5;
        startCountdown();
    };

    app.controller("MainCtrl", MainCtrl);
}());