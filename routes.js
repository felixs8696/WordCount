angular
  .module("felixsu")
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    console.log('hihihi');
    $stateProvider
      .state("index", {
        url: "/",
        templateUrl: "index.html",
        controller: "WordCountCtrl as vm"
      });
    $urlRouterProvider.otherwise("/");
  }]);