(function () {

	var app = angular.module('app-services', []);

	app.factory('itemInfoService', [
		'$http',
		function ($http) {
			return function getItemList () {
				var url = 'app/json/items-info.json',
					successCallback = function (response) {
						console.log('success.');
						return response.data;
					},
					errorCallback = function (response) {
						console.log('failure.');
						return response.data;
					};

				return $http.get(url).then(successCallback, errorCallback);
			};
	}]);

})();
