freelancer.directive("changeClass", function() {
  return {
    link: function (scope, element, attrs) {
      element.bind("mouseenter", function() {
        element.toggleClass(attrs.changeClass);
      });
      element.bind("mouseleave", function() {
        element.toggleClass(attrs.changeClass);
      });
    }
  };
})

freelancer.directive('showOnHover', function() {
    return {
       link : function(scope, element, attrs) {
          element.parent().bind('mouseenter', function() {
            element.show();
          });
          element.parent().bind('mouseleave', function() {
            element.hide();
          });
       }
    };
});

freelancer.directive("debug", function ($compile) {
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
