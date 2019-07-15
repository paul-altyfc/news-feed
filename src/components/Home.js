import React, { Component } from 'react';
import * as api from '../api';
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

        {/* <br />
        <h1>News Feed</h1>
        <Link to="/articles">Articles</Link> */}
      </>
    );
  }
  // componentDidMount() {
  //   console.log('mounted home');
  //   api.getEndpoints().then(endpoints => {
  //     console.log(endpoints);
  //   });
  // }
}

export default Home;
