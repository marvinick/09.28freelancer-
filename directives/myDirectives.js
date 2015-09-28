courseRoster.directive("hometext", function() {
  return {
    template: "Back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass(attrs.changeClass);
    });
  }
})

courseRoster.directive("sampleCourse", function() {
  return {
    scope: {
      courseName:"="
    },
    template: '<div>{{courseName}}</div>'
  }
})

courseRoster.directive("alertUser", function() {
  return {
    scope: {
      dial: "&"
    },
    template: '<input type="text" ng-model="value">' +
              '<div class="button" ng-click="dial({message:value})">Alert!</div>'
  }
})

courseRoster.directive("debug", function ($compile) {
  return {
    terminal: true,
    priority: 1000000,
    link: function (scope, element) {
      var clone = element.clone();
      element.attr("style", "color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
})