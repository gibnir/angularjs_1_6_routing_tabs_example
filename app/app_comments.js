(function () {
	var app = angular.module('store',[
		'app-directives'
		]);

	app.controller('storeController', ['$http', function ($http) {
		var store = this;
		store.products = [];

		var url = 'app/json/json.json',
			successCallback = function(response) {
				console.log(response);
				store.products = response.data;
			},
			errorCallback = function(response) {
				store.products = 'errorCallback';
			};

		$http.get(url).then(successCallback, errorCallback);

	}]);

	// app.controller('panelController', function () {
	// 	this.tab = 1;

	// 	this.selectedTab = function (tabNumber) {
	// 		this.tab = tabNumber;
	// 	}

	// 	this.isSelected = function (checkedTab) {
	// 		return this.tab === checkedTab;
	// 	}
	// });

	// app.controller('GalleryController', function () {
	// 	this.current = 0;
	// 	this.setCurrent = function(newGallery){
	// 		this.current = newGallery || 0;
	// 	};
	// });

	// app.controller('ReviewController', function () {
	// 	this.review = {};

	// 	this.addReview = function (product) {
	// 		this.review.createdOn = Date.now();
	// 		product.reviews.push(this.review);
	// 		this.review = {}; // clear the form.
	// 	};
	// });

	/*app.directive('productGallery', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/product-gallery.html',
			controller: function () {
				this.current = 0;
				this.setCurrent = function(newGallery){
					this.current = newGallery || 0;
				};		
			},
			controllerAs: 'gallery'
		};
	});

	app.directive('productPanel', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/product-panel.html',
			controller: function () {
				this.tab = 1;

				this.selectedTab = function (tabNumber) {
					this.tab = tabNumber;
				}

				this.isSelected = function (checkedTab) {
					return this.tab === checkedTab;
				}
			},
			controllerAs: 'panel'
		};
	});
	
	app.directive('productDescription', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/product-description.html'
		};
	});

	app.directive('productSpecs', function () {
		return {
			restrict: 'A',
	  		templateUrl: 'app/directives/product-specs.html'
		};
	});

	app.directive('productReviews', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/directives/product-reviews.html'
		};
	});*/

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "img/img_1.jpg",
        "img/img_12.jpg",
        "img/img_13.jpg"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "img/img_2.jpg",
        "img/img_22.jpg",
        "img/img_23.jpg"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "img/img_3.jpg",
        "img/img_32.jpg",
        "img/img_33.jpg"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }
  ];

})();
