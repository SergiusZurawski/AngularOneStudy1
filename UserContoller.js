
(function(){
    var app = angular.module("githubViewer");
    var MainCtrl = function(
            $scope, $http, $interval, github,
            $log, $anchorScroll, $location) {

        $scope.message = "Angular APP!";
        
        var onError = function(reason){
            $scope.error_message = reason;
        };

        var onRepos = function(data){
            $log.info('Calling in onRepos');
            $log.info(data);
            $scope.repos = data;
            $location.hash("userDetails");
            $anchorScroll();
        };

        var onRetrive = function(response){
             $scope.user = response.data;
             $log.info('Calling in OnRetrive');
             $log.info(response.data);
             github.getRepos($scope.user).then(onRepos, onError);
        }; 

        var decrementCountdown = function() {
            $scope.countdown -= 1;
            if($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        $scope.search = function(username){
            $log.info("Searching for " + username);
            $http.get("https://api.github.com/users/" + username)
                .then(onRetrive, onError);
            if(countdownInterval)
                $interval.cancel(countdownInterval);
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };
        
        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        startCountdown();
    };

    app.controller("MainCtrl", MainCtrl);
}());