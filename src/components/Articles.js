import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './Loading';
import ErrorPage from './Error-page';
import { Link } from '@reach/router';
import styles from '../css/Articles.module.css';
import Voter from './Voter';
import Sorter from './Sorter';
import Orderer from './Orderer';
import dateFormatter from '../utils/dateFormatter';
import Topic from './Topics';

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    sort: 'created_at',
    order: 'desc'
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading articles..." />;

    return (
      <div className={styles.articles}>
        <h2 className={styles.header}>
          Articles - {this.props.topic === undefined ? 'All' : this.props.topic}
        </h2>
        <Topic className={styles.topics} />
        <div className={styles.control}>
          <Sorter setSort={this.setValue} />
          <Orderer setOrder={this.setValue} />
        </div>
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

  setValue = e => {
    console.log(e.target);
    const { name, value } = e.target;

    this.setState({ [name]: value });
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
    }
  }
}

export default Articles;
