import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

const Posts = () => (
  <div>
    <h3>posts</h3>
  </div>
);
const Products = () => (
  <div>
    <h3>products</h3>
  </div>
);
const Post = () => (
  <div>
    <h3>post</h3>
  </div>
);
const Page = () => (
  <div>
    <h3>page</h3>
  </div>
);
const Home = () => (
  <div>
    <h3>home</h3>
  </div>
);

class App extends Component {
  componentDidMount() {
    console.log(BicameralismSettings);
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
              <Link to={BicameralismSettings.path + 'sample-page'}>test</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path={BicameralismSettings.path} component={Home} /> // the root path
          <Route exact path={BicameralismSettings.path + 'posts/:slug'} component={Post} />
          <Route exact path={BicameralismSettings.path + 'posts'} component={Posts} />
          <Route exact path={BicameralismSettings.path + 'products'} component={Products} />
          <Route exact path={BicameralismSettings.path + ':slug'} component={Page} />
          <Route exact path="*" component={() => <div>not found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
