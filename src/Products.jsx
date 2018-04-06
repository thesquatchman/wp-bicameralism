import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';

class Products extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (this.props.paged > 0) this.props.onGetMoreProducts();
	}

	render() {
		return (
			<main className="pad-h pad-v contained col row-sm">
				{this.props.data &&
					this.props.data.map(product => {
						return (
							<article className="product size4" key={product.id}>
								<img src={product.images[0].src} alt={product.images[0].alt} />
								<div className="pad-h pad-v">
									<h3>{product.name}</h3>
									<button
										className="btn"
										onClick={e => {
											e.preventDefault();
											this.props.onAddProductToCart(product, 1);
										}}
									>
										Add to cart
									</button>
								</div>
							</article>
						);
					})}
			</main>
		);
	}
}

export default Products;
