freelancer.controller('FreelancersCtrl', function FreelancersCtrl($scope, FreelancersFactory) {
  $scope.freelancers = FreelancersFactory.freelancers;
  $scope.FreelancersFactory = FreelancersFactory;


  $scope.alert = function(message) {
    alert(message)
  }

  $scope.lions = false;
  $scope.cranes = false;
  $scope.texts = false;

});
