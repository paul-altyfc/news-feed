import React, { Component } from 'react';
import * as api from '../api';

class Home extends Component {
  state = {
    endpoints: []
  };
  render() {
    console.log('in home');
    return <h1>Home</h1>;
  }
  componentDidMount() {
    console.log('mounted home');
    api.getEndpoints().then(endpoints => {
      console.log(endpoints);
    });
  }
}

export default Home;
