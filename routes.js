angular.module("felixsu")
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("index", {
        url: "/",
        templateUrl: "WordCount.html",
        controller: "WordCountCtrl as vm",
      });
    $urlRouterProvider.otherwise("/");
  });