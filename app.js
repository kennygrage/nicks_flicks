var nicksFlix = angular.module('nicksFlix', ['ui.router']);

nicksFlix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/home.html"
      },
    }
  }); //end $stateProvider 'home'

  // $stateProvider.state('home.login', {
  //   url: "/login",
  //   views: {
  //     'header_form': {
  //       templateUrl: "partials/login.html",
  //       controller: 'HeadersCtrl'
  //     }
  //   }
  // }); //end $stateProvider 'login'
  //
  // $stateProvider.state('home.sign-up', {
  //   url: "/sign-up",
  //   views: {
  //     'header_form': {
  //       templateUrl: "partials/sign-up.html",
  //       controller: 'HeadersCtrl'
  //     }
  //   }
  // }); //end $stateProvider 'sign-up'
  //
  // $stateProvider.state('post-a-project', {
  //   url: "/post-a-project",
  //   views: {
  //     'header': {
  //       templateUrl: "partials/header.html",
  //       controller: 'HeadersCtrl'
  //     },
  //     'body': {
  //       templateUrl: "partials/post-a-project.html"
  //     }
  //   }
  // }); //end $stateProvider 'post-a-project'


}); //end nicksFlix.config
