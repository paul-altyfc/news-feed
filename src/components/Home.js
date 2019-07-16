import React, { Component } from 'react';
import Articles from './Articles';
import { Router } from '@reach/router';

class Home extends Component {
  state = {
    //    endpoints: []
  };
  render() {
    console.log('in home');
    return (
      <>
        <h1>News Updates</h1>
        <Router>
          <Articles path="/articles" />
        </Router>
      </>
    );
  }
}

export default Home;
