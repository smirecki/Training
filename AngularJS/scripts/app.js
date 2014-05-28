(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
	{
		name: "Dodecahedron",
		price: 2,
		description: "Some gems have hidden qualities beyond their luster, beyond their shine...  Dodeca is one of those gems.",
		images: [
			{
				full: 'images/dodecahedron-01-full.jpg',
				thumb: 'images/dodecahedron-01-thumb.jpg'
			},
			{
				full: 'images/dodecahedron-02-full.jpg',
				thumb: 'images/dodecahedron-02-thumb.jpg'

			}
		],
		canPurchase: true,
		//soldOut: true
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "Some gems have hidden qualities beyond their luster, beyond their shine...  Dodeca is one of those gems.",
		canPurchase: false,
		//soldOut: true
	}
];
})();
