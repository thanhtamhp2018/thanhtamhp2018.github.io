// JavaScript Document
var app = new Vue({
	el: '#app',
	data: {
		product: 'Dreammy',
		image: 'image/front.jpg',
		description: 'Sexy to night',
		onSale: "On Sale!",
		inventory: 15,
		details: ["80% silk", "20% polyester", "Ladies"],
		mainPrice:0,
		price: 999,
		priceDown: 999 * 0.7,
		total:0,
		variants: [{
				variantId: 2345,
				variantSider: "Front",
				variantImage: "image/front.jpg"
			},
			{
				variantId: 2346,
				variantSider: "Back",
				variantImage: "image/back.jpg"
			}
		],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
		cart: 0
	},
	methods: {
		addToCart() {
			if (this.inventory > 0) {
				this.cart += 1;
				this.inventory -= 1;
			this.total=this.cart*this.price;				
			}
		},
		decrementToCart() {
			if (this.cart > 0) {
				this.cart -= 1;
				this.inventory += 1;
			this.total=this.cart*this.price;				
			}
		},
		updateProduct(variantImage) {
			this.image = variantImage;
		}
	}
})