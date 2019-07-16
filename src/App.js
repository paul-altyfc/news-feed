import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import ErrorPage from './components/error-page';
import Nav from './components/nav';
import Articles from './components/Articles';
import Article from './components/Article';

class App extends Component {
  state = { loggedInUser: 'jessjelly' };
  render() {
    const { loggedInUser } = this.state;
    return (
      <>
        <div className="app">
          <Nav />
          <Router>
            <Home path="/" />
            <Articles loggedInUser={loggedInUser} path="/articles" />
            <Articles loggedInUser={loggedInUser} path="/topics/:topic" />
            <Articles loggedInUser={loggedInUser} path="/authors/:author" />
            <Article loggedInUser={loggedInUser} path="/articles/:article_id" />
            <ErrorPage text="404: Page Not Found" default />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
