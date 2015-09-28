courseRoster.controller('HeaderCtrl', function HeaderCtrl($scope, $location) {
  $scope.currentPath = $location.path();
});