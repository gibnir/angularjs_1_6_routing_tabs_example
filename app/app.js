(function () {
	var app = angular.module('mainApp',[
		'ui.router',
		'app-controllers'
		]);

	app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			var page1 = {
					name: 'page-1',
					url: '/page-1',
					templateUrl: 'templates/page-1.html'
				},
				page2 = {
					name: 'page-2',
					url: '/page-2',
					templateUrl: 'templates/page-2.html'
				},
				page3 = {
					name: 'page-3',
					url: '/page-3',
					templateUrl: 'templates/page-3.html'
				};

			$urlRouterProvider
				.otherwise('/page-1');

			$stateProvider
				.state(page1)
				.state(page2)
				.state(page3);
		}]);

})();
