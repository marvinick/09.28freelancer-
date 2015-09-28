courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  $scope.ctrlCourse = "shoot"

  $scope.alert = function(message) {
    alert(message)
  }

});