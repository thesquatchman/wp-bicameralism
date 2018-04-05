import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			page: 0
		};
	}
	componentDidMount() {
		this.getProducts();
	}

	getProducts() {
		fetch(
			BicameralismSettings.woo.url +
				'products?consumer_key=' +
				BicameralismSettings.woo.consumer_key +
				'&consumer_secret=' +
				BicameralismSettings.woo.consumer_secret
		)
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({
					products: data
				});
			});
	}

	render() {
		return (
			<main>
				{this.state.products.map(product => {
					return (
						<article key={product.id}>
							<h3>{product.name}</h3>
							<Link to={BicameralismSettings.path + 'products/' + product.slug}>more</Link>
						</article>
					);
				})}
			</main>
		);
	}
}

export default Products;
