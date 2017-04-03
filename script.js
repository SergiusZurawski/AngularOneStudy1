
(function(){
    var app = angular.module("githugViewer", [])
    var MainCtrl = function($scope, $http) {
        $scope.message = "Angular APP!";
        
        var onError = function(reason){
            $scope.error_message = reason;
        };

        var onRepos = function(response){
            $scope.repos = response.data;
        };

        var onRetrive = function(response){
             $scope.user = response.data;
             $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        }; 

        $scope.search = function(username){
            $http.get("https://api.github.com/users/" + username)
                .then(onRetrive, onError);
        };
        
        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
    };

    app.controller("MainCtrl", ['$scope', '$http', MainCtrl]);
}());