(function(){

    var app = angular.module("githubViewer", ["ngRoute", "angular-route"]);
    //require('angular-route')]

    app.config(function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "main.html",
                controller: "MainCtrl"
            })
            .otherwise({redirectTo: "/main"});
    });

}());