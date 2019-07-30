import React, { Component } from 'react';
import { Router } from '@reach/router';
import ErrorPage from './components/Error-page';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Article from './components/Article';
import './App.css';

class App extends Component {
  state = {
    loggedInUser: 'jessjelly'
  };
  render() {
    const { loggedInUser } = this.state;

    return (
      <>
        <div>
          <Nav
            loggedInUser={loggedInUser}
            updateNavBar={this.updateNavBar}
          />
          <Router>
            <Articles loggedInUser={loggedInUser} path="/" />
            <Articles loggedInUser={loggedInUser} path="/topics/:topic" />
            <Articles loggedInUser={loggedInUser} path="/authors/:author" />
            <Article loggedInUser={loggedInUser} path="/articles/:article_id" />
            <ErrorPage text="404: Page Not Found" default />
          </Router>
        </div>
      </>
    );
  }
  updateNavBar = (value) => {
    this.setState(state => {
      return { loggedInUser: value };
    });
  }
}

export default App;
