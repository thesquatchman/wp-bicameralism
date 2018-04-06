import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (this.props.paged > 0) this.props.onGetMoreProducts();
	}

	render() {
		return (
			<main>
				{this.props.data &&
					this.props.data.map(product => {
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
