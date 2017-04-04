
(function(){
    var app = angular.module("githubViewer");
    var UserCtrl = function(
            $scope, github, $log, $routeParams) {
        
        var onError = function(reason){
            $scope.error_message = reason;
        };

        var onRepos = function(data){
            $log.info('Calling in onRepos');
            $log.info(data);
            $scope.repos = data;
        };

        var onRetrive = function(data){
             $scope.user = data;
             $log.info('Calling in OnRetrive');
             $log.info(data);
             github.getRepos($scope.user).then(onRepos, onError);
        }; 

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        $log.info("user name is :" + $scope.username);
        github.getUser($scope.username).then(onRetrive, onError);
    };

    app.controller("UserCtrl", UserCtrl);
}());