app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise("/404")
    /*
    var errorState = {
      name: 'error',
      url: '/404',
      templateUrl: "../../views/error.html"
    }
  */
    var homeState = {
      name: 'home',
      url: "/",
      templateUrl: "../../views/dashboard.html",
      controller: 'MainCtrl',
      controllerAs: 'vm'
    }

    var writeState = {
      name: 'write',
      url:'/write',
      templateUrl:'../../views/write.html',
      controllerAs: 'vm'
    }

    //$stateProvider.state(errorState);
    $stateProvider.state(homeState);
    $stateProvider.state(writeState);

})