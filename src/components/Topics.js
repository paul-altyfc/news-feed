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
    err: null,
    topic: ''
  };

  render() {
    const { topics, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading topics..." />;
    return (
      <div className={styles.container}>
        <h4 className={styles.catheader}>Categories</h4>
        <ul className={styles.topics}>
          {topics.map(topic => {
            return (
              <li className={styles.list} key={topic.slug} id={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <button
                    onClick={this.handleClick(topic.slug)}
                    className={styles.topicbtn}
                  >
                    {topic.slug}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleClick = topic => {
    // console.log(this.props.topic);
    return () => {
      this.props.onPress(topic);
    };
  };
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
