var freelancer = angular.module('freelancer', ['ui.router']);

freelancer.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html',
      },
    }
  });

  $stateProvider.state('courses', {
    url: "/courses",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: "partials/courses.html",
        controller: 'CoursesCtrl'
      }
    }
  });
});
