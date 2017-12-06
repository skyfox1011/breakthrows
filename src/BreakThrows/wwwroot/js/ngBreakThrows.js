/// <reference path="../lib/angular/angular.js" />
/// <reference path="../lib/angular/angular.min.js" />

(function () {
    angular.module("ngBreakThrows", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    controller: "homeController",
                    controllerAs: "vm",
                    templateUrl: "/ngViews/home.html"
                })
                .when("/frame", {
                    controller: "frameController",
                    controllerAs: "vm",
                    templateUrl: "/ngViews/frame.html"
                })
                .when("/frame/:character", {
                    controller: "frameController",
                    controllerAs: "vm",
                    templateUrl: "/ngViews/frame.html"
                })
                .when("/game", {
                    controller: "gameController",
                    controllerAs: "vm",
                    templateUrl: "/ngViews/game.html"
                })
                .when("/contact", {
                    controller: "contactController",
                    controllerAs: "vm",
                    templateUrl: "/ngViews/contact.html"
                });

            $routeProvider.otherwise({ redirectTo: "/" });

        });
})();