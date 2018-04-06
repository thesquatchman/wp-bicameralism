import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Client from './api/Client';
import './App.scss';
import Posts from './Posts';
import Products from './Products';
import Post from './Post';
import Page from './Page';
import Cart from './Cart';
import Checkout from './Checkout';
import Home from './Home';
import Header from './Header';

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
      user: {},
      cart: {
        total: 0,
        items: []
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Header cart={this.state.cart} />
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
                onAddProductToCart={this.addProductToCart}
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
          this.setState({ posts: { data: newData, page: this.state.posts.page + 1 } });
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
          this.setState({ products: { data: newData, page: this.state.products.page + 1 } });
        } else {
          this.setState({ products: { data: this.state.products.data, page: 0 } });
        }
      });
    }
  };
  addProductToCart = (product, qty) => {
    const newCartItem = {
        id: product.id,
        name: product.name,
        product_id: product.id,
        quantity: qty,
        tax_class: product.tax_class,
        subtotal: product.price * qty,

        meta_data: product.meta_data,
        sku: product.sku,
        price: product.price
      },
      newTotal = product.price * qty + this.state.cart.total;
    this.setState({
      cart: {
        total: newTotal,
        items: [newCartItem, ...this.state.cart.items]
      }
    });
    console.log(product, qty);
  };
}

export default App;
