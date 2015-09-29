var freelancer = angular.module('freelancer', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

freelancer.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('freelancers', {
    url: "/freelancers",
    views: {
      'body': {
        templateUrl: "partials/freelancers.html",
        controller: 'FreelancersCtrl'
      }
    }
  });

  $stateProvider.state('jobs', {
    url: "/jobs",
    views: {
      'body': {
        templateUrl: "partials/jobs.html",
        controller: 'JobsCtrl'
      }
    }
  });
});
