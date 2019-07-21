import React, { Component } from 'react';
import { Router } from '@reach/router';
import ErrorPage from './components/error-page';
import Nav from './components/nav';
import Articles from './components/Articles';
import Article from './components/Article';
import './App.css';
// import Users from './components/Users';

class App extends Component {
  state = {
    loggedInUser: 'jessjelly'
  };
  render() {
    const { loggedInUser } = this.state;

    return (
      <>
        {/* <div className={styles.container}> */}
        <div>
          {/* <Nav loggedInUser={loggedInUser} /> */}
          <Nav
            loggedInUser={this.state.loggedInUser}
            updateGrandparent={this.updateGrandparent.bind(this)}
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
  updateGrandparent(value) {
    console.log(value);
    this.setState({ loggedInUser: value });
    console.log(this.state.loggedInUser);
  }
}

export default App;
