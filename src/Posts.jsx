import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		this.getPosts();
	}

	getPosts() {
		fetch(BicameralismSettings.URL.api + '/posts/')
			.then(data => data.json())
			.then(data => {
				console.log(data);
				this.setState({
					posts: data
				});
			});
	}

	render() {
		return (
			<main>
				{this.state.posts.map(post => {
					return (
						<article key={post.id}>
							<h3>{post.title.rendered}</h3>
							<Link to={BicameralismSettings.path + 'posts/' + post.slug}>more</Link>
						</article>
					);
				})}
			</main>
		);
	}
}

export default Posts;
