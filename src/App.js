import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import ErrorPage from './components/error-page';
import Nav from './components/nav';
import Articles from './components/Articles';

class App extends Component {
  state = { loggedInUser: 'jessyjelly' };
  render() {
    const { loggedInUser } = this.state;
    return (
      <>
        <div className="app">
          <Nav />
          <Router>
            <Home path="/" />
            <Articles loggedInuser={loggedInUser} path="/articles" />
            <ErrorPage text="404: Page Not Found" default />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
