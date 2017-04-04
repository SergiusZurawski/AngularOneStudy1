(function(){

    var app = angular.module("githubViewer", ["ngRoute"] );
    //require('angular-route')]

    app.config(function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "main.html",
                controller: "MainCtrl"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "UserCtrl"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "repo.html",
                controller: "RepoCtrl"
            })
            .otherwise({redirectTo: "/main"});
    });

}());