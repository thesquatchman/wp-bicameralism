import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
const path = BicameralismSettings.path;

class Header extends Component {
	render() {
		const { items, total } = this.props.cart;
		return (
			<header className="header-container">
				<nav className="navbar contained">
					<Link to={path} className="brand">
						<img src={logo} className="App-logo" alt="logo" />
						WP Bicameralism
					</Link>
					<ul className="nav inline">
						<li>
							<Link to={path}>Home</Link>
						</li>
						<li>
							<Link to={path + 'posts'}>Blog</Link>
						</li>
						<li>
							<Link to={path + 'products'}>shop</Link>
						</li>
						<li>
							<Link to={path + 'cart'}>cart</Link>
						</li>
						<li>
							<Link to={path + 'sample-page'}>test</Link>
						</li>
					</ul>
					<div className="minicart">
						{items.length > 0 ? <span>{items.length} item(s)</span> : <span>cart emtpy</span>}
						<span> ${total}</span>
					</div>
				</nav>
			</header>
		);
	}
}
export default Header;
