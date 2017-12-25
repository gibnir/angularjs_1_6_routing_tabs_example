(function () { 
  // app-components
  var app = angular.module('app-directives', []);

  app.directive('navTabs', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-nav-tabs.html'
    };
  });

  app.directive('componentList', [
    // 'itemInfoService', 
    function (itemInfoService) {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/component-list.html',
      controller: function (itemInfoService) {
        var list = this;
        list.items = [];
        // console.log(itemInfoService);

        itemInfoService().then(function (data) {
          // console.log(data);

          list.items = data;
        });
      },
      controllerAs: 'list'
    };
  }]);

})();
