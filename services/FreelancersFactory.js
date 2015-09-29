freelancer.factory('FreelancersFactory', function FreelancersFactory() {
  var factory = {};
  factory.freelancers = [];
  factory.hireFreelancer = function() {
    factory.freelancers.push({ name: factory.freelancerName });
    factory.freelancerName = null;
  };

  return factory;
});
