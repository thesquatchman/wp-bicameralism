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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        data: [],
        page: 0
      },
      products: {
        data: [],
        page: 0
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
              <Link to={BicameralismSettings.path}>Home</Link>
            </li>
            <li>
              <Link to={BicameralismSettings.path + 'posts'}>Blog</Link>
            </li>
            <li>
              <Link to={BicameralismSettings.path + 'products'}>shop</Link>
            </li>
            <li>
              <Link to={BicameralismSettings.path + 'cart'}>cart</Link>
            </li>
            <li>
              <Link to={BicameralismSettings.path + 'sample-page'}>test</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path={BicameralismSettings.path} component={Home} /> // the root path
          <Route exact path={BicameralismSettings.path + 'posts/:slug'} component={Post} />
          <Route exact path={BicameralismSettings.path + 'posts'} component={Posts} />
          <Route exact path={BicameralismSettings.path + 'products'} component={Products} />
          <Route exact path={BicameralismSettings.path + 'cart'} component={Cart} />
          <Route exact path={BicameralismSettings.path + 'checkout'} component={Checkout} />
          <Route exact path={BicameralismSettings.path + ':slug'} component={Page} />
          <Route exact path="*" component={() => <div>not found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
