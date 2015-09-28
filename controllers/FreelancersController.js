freelancer.controller('FreelancersCtrl', function FreelancersCtrl($scope) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  $scope.ctrlCourse = "shoot"

  $scope.alert = function(message) {
    alert(message)
  }

});
