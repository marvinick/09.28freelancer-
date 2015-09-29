var freelancer = angular.module('freelancer', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

freelancer.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html',
        controller: 'FreelancersCtrl'
      },
    }
  });

  $stateProvider.state('freelancers', {
    url: "/freelancers",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: "partials/freelancers.html",
        controller: 'FreelancersCtrl'
      }
    }
  });

  $stateProvider.state('jobs', {
    url: "/jobs",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: "partials/jobs.html",
        controller: 'JobsCtrl'
      }
    }
  });
});
