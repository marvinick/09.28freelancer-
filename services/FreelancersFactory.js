freelancer.factory('FreelancersFactory', function FreelancersFactory() {
  var factory = {};
  factory.freelancers = [];
  factory.addCourse = function() {
    factory.freelancers.push({ name: factory.courseName, id: factory.courses.length + 1, students: [] });
    factory.courseName = null;
  };

  return factory;
});
