export default class Client {
	constructor() {
		this.urlBase = BicameralismSettings.URL.api;
		this.wooBase = BicameralismSettings.woo.url;
		this.wooKey = BicameralismSettings.woo.consumer_key;
		this.wooSec = BicameralismSettings.woo.consumer_secret;
	}

	getPosts = page => this.get(this.urlBase + 'posts?page=' + page);

	getProducts = page =>
		this.get(
			this.wooBase +
				'products?page=' +
				page +
				'&products?consumer_key=' +
				this.wooKey +
				'&consumer_secret=' +
				this.wooSec
		);

	get(url) {
		fetch(url).then(data => data.json());
	}
}
