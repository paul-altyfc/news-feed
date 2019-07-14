import React, { Component } from 'react';
import * as api from '../api';
import Loading from './loading';
import ErrorPage from './error-page';

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };
  render() {
    return (
      <>
        <h1>Topics</h1>
      </>
    );
  }
  componentDidMount() {
    console.log('retrieving topics');
    api
      .getTopics()
      .then(topics => {
        console.log(topics);
        this.setState({ topics, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default Topics;
