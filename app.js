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

  $stateProvider.state('second-div', {
    url: "/second-div",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/second-div.html",
        controller: 'ReviewsCtrl'
      }
    }
  }); //end $stateProvider 'second-div'

  $stateProvider.state('second-div.specific_review', {
    url: "/:reviewId",
    views: {
      'current_review': {
        templateUrl: "partials/review.html",
        controller: 'ReviewsCtrl'
      }
    }
  }); //end $stateProvider 'second-div.specific_review'

}); //end nicksFlix.config
