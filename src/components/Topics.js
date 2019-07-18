import React, { Component } from 'react';
import { getTopics } from '../api';
import styles from './Topics.module.css';
import Loading from './loading';
import ErrorPage from './error-page';
import { Link } from '@reach/router';

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };

  render() {
    const { topics, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading topics..." />;
    return (
      <>
        <ul className={styles.topics}>
          <h3>Categories</h3>
          {topics.map(topic => {
            return (
              <li className={styles.listitem} key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <button>{topic.slug}</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  fetchTopics = () => {
    getTopics(this.props.slug)
      .then(({ topics }) => {
        this.setState({ topics, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchTopics();
  }
}
export default Topics;
