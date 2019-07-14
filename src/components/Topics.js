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
    const { topics, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading dinosaurs..." />;

    return (
      <>
        <h1>Topics</h1>
        <ul>
          {topics.map(({ slug, description }) => {
            return (
              <li key={slug}>
                <h2>{slug}</h2>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  componentDidMount() {
    console.log('retrieving topics');
    api
      .getTopics()
      .then(topics => {
        console.log(topics.topics);
        this.setState({ topics: topics.topics, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default Topics;
