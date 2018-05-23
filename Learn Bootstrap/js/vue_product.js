// JavaScript Document
var app = new Vue({
	el: '#app',
	data: {
		product: 'Dreammy',
		image: 'image/front.jpg',
		description: 'Sexy to night',
		onSale: "On Sale!",
		details: ["80% silk", "20% polyester", "Ladies"],
		inventory: 20,
		price: 999,
		priceDown: Math.floor(999 * 0.7),
		total: 0,
		variants: [{
			variantId: 2345,
			variantSider: "Front",
			variantImage: "image/front.jpg"
		}, {
			variantId: 2346,
			variantSider: "Back",
			variantImage: "image/back.jpg"
		}],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
		cart: 0,
		telephone: '0999999999',
		like:0
	},
	//sau khi số lượng trong kho còn từ 10 cái trở xuống thì sẽ có giảm giá 30%, giá của priceDown,
	//bắt đầu từ cái hàng đó sẽ được hưởng giá giảm, còn phía trước nó sẽ không được giảm, vẫn được
	//tính với giá của price, và cart sẽ vẫn hiển thị số lượng
	methods: {
		addToCart() {
			if (this.inventory > 0) {
				this.cart += 1;
				this.inventory -= 1;
				let priceNow;
				if (this.inventory > 10) priceNow = this.price;
				else priceNow = this.priceDown;
				console.log(priceNow);
				this.total += priceNow;
			}
			
		},
		decrementToCart() {
			if (this.cart > 0) {
				this.cart -= 1;
				let priceNow;
				if (this.inventory > 10) priceNow = this.price;
				else priceNow = this.priceDown;
				this.inventory += 1;


				console.log(priceNow);
				this.total -= priceNow;
			}
			
		},
		likethis() {
			if(this.like>=0) this.like += 1;
		},
		dislike() {
			if(this.like>0) this.like -= 1;
		},
		updateProduct(variantImage) {
			this.image = variantImage;
		}
	}
})