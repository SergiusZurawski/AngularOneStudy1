(function(){

    var github = function($http, $log){

        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    $log.info("In getUser");
                    $log.info(response.data);
                    return response.data;
                });
        };

        var getRepos = function(user) {
            $log.info("In repos");
            $log.info(user);
            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                });
        };

         var getRepos = function(user) {
            $log.info("In repos");
            $log.info(user);
            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var module = angular.module("githubViewer");
    module.factory("github", github );


}());