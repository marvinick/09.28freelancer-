var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.config(function($stateProvider, $urlRouterProvider) {

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

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: "partials/courses.students.html",
        controller: 'StudentsCtrl'
      }
    }
  });

  $stateProvider.state('course', {
    url: "/course",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: "partials/course.detail.html",
        controller: 'CoursesCtrl'
      }
    }
  });

});
