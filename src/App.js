import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Client from './api/Client';
import logo from './logo.svg';
import './App.scss';
import Posts from './Posts';
import Products from './Products';
import Post from './Post';
import Page from './Page';
import Cart from './Cart';
import Checkout from './Checkout';
import Home from './Home';

const path = BicameralismSettings.path;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        data: [],
        page: 1
      },
      products: {
        data: [],
        page: 1
      },
      user: {}
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header>
        <Switch>
          <Route exact path={path} component={Home} /> // the root path
          <Route exact path={path + 'posts/:slug'} component={Post} />
          <Route
            exact
            path={path + 'posts'}
            component={() => (
              <Posts
                data={this.state.posts.data}
                paged={this.state.posts.page}
                onGetMorePosts={this.getMorePosts}
              />
            )}
          />
          <Route
            exact
            path={path + 'products'}
            component={() => (
              <Products
                data={this.state.products.data}
                paged={this.state.products.page}
                onGetMoreProducts={this.getMoreProducts}
              />
            )}
          />
          <Route exact path={path + 'cart'} component={Cart} />
          <Route exact path={path + 'checkout'} component={Checkout} />
          <Route exact path={path + ':slug'} component={Page} />
          <Route exact path="*" component={() => <div>not found</div>} />
        </Switch>
      </div>
    );
  }

  getMorePosts = () => {
    if (this.state.posts.page > 0) {
      new Client().getPosts(this.state.posts.page).then(data => {
        if (data.length > 0) {
          const newData = [...data, ...this.state.posts.data];
          this.setState({ posts: { data, page: this.state.posts.page + 1 } });
        } else {
          this.setState({ posts: { data: this.state.posts.data, page: 0 } });
        }
      });
    }
  };
  getMoreProducts = () => {
    if (this.state.posts.page > 0) {
      new Client().getProducts(this.state.products.page).then(data => {
        if (data.length > 0) {
          const newData = [...data, ...this.state.products.data];
          this.setState({ products: { data, page: this.state.products.page + 1 } });
        } else {
          this.setState({ products: { data: this.state.products.data, page: 0 } });
        }
      });
    }
  };
}

export default App;
