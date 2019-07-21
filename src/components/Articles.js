import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './loading';
import ErrorPage from './error-page';
import { Link } from '@reach/router';
import styles from '../css/Articles.module.css';
import Voter from './Voter';
import Sorter from './Sorter';
import Orderer from './Orderer';
import dateFormatter from './dateFormatter';
import Topic from './Topics';

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    sort: 'created_at',
    order: 'desc',
    topic: 'All'
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading articles..." />;

    return (
      <div className={styles.articles}>
        <h2 className={styles.header}>Articles - {this.state.topic}</h2>
        <Topic onPress={this.handleClick} className={styles.topics} />
        <div className={styles.control}>
          <Sorter setSort={this.setSort} />
          <Orderer setOrder={this.setOrder} />
        </div>
        {/* <Link to="../">Back</Link> */}
        <ul className={styles.list}>
          {articles.map(article => {
            return (
              <li className={styles.listitems} key={article.article_id}>
                <Link
                  className={styles.link}
                  to={`/articles/${article.article_id}`}
                >
                  <h3>{article.title}</h3>
                </Link>
                {dateFormatter(article.created_at)}

                <Link to={`/topics/${article.topic}`}>
                  <p>Category: {article.topic}</p>
                </Link>

                <Link to={`/authors/${article.author}`}>
                  <p>Author: {article.author}</p>
                </Link>

                <p>Comments: {article.comment_count}</p>

                <Voter
                  type="articles"
                  id={article.article_id}
                  votes={article.votes}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  setOrder = e => {
    const { value } = e.target;
    this.setState({ order: value });
  };

  setSort = e => {
    const { value } = e.target;
    this.setState({ sort: value });
  };

  handleClick = topic => {
    this.setState({ topic });
  };

  fetchArticles = () => {
    const { topic, author } = this.props;
    const { sort, order } = this.state;
    getArticles(topic, author, sort, order)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, author } = this.props;
    const { sort, order } = this.state;
    const hasTopicChanged = prevProps.topic !== topic;
    const hasAuthorChanged = prevProps.author !== author;
    const hasSortChanged = prevState.sort !== sort;
    const hasOrderChanged = prevState.order !== order;

    if (
      hasTopicChanged ||
      hasAuthorChanged ||
      hasSortChanged ||
      hasOrderChanged
    ) {
      this.fetchArticles();

      if (topic === undefined) this.setState({ topic: 'All' });
    }
  }
}

export default Articles;
