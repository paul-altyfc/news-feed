// import styles from './App.module.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import ErrorPage from './components/error-page';
import Nav from './components/nav';
import Articles from './components/Articles';
import Article from './components/Article';
import './App.css';

class App extends Component {
  state = { loggedInUser: 'jessjelly' };
  render() {
    const { loggedInUser } = this.state;
    console.log(loggedInUser);
    return (
      <>
        {/* <div className={styles.container}> */}
        <div className="container">
          <Nav loggedInUser={loggedInUser} />
          <Router>
            <Articles loggedInUser={loggedInUser} path="/" />
            {/* <Articles loggedInUser={loggedInUser} path="/articles" /> */}
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
