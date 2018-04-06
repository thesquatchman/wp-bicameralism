import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (this.props.paged > 0) this.props.onGetMorePosts();
	}

	render() {
		return (
			<main className="pad-h contained">
				{this.props.data &&
					this.props.data.map(post => {
						return (
							<article key={post.id}>
								<h3>{post.title.rendered}</h3>
								<Link to={BicameralismSettings.path + 'posts/' + post.slug}>more</Link>
							</article>
						);
					})}
				{this.props.paged > 0 && (
					<button
						onClick={e => {
							e.preventDefault();
							this.props.onGetMorePosts();
						}}
					>
						Load More Posts
					</button>
				)}
			</main>
		);
	}
}

export default Posts;
