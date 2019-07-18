import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './loading';
import ErrorPage from './error-page';
import { Link } from '@reach/router';
import styles from './Articles.module.css';
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
    order: 'desc'
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading articles..." />;

    return (
      <div className={styles.articles}>
        <Topic />
        <h2 className={styles.header}>Articles</h2>
        <div className={styles.control}>
          <label>Sort by:</label>
          <Sorter setSort={this.setSort} />
          <Orderer setOrder={this.setOrder} />
        </div>
        {/* <Link to="../">Back</Link> */}
        <ul className={styles.list}>
          {articles.map(article => {
            return (
              <li className={styles.listitems} key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
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

  fetchArticles = () => {
    getArticles(
      this.props.topic,
      this.props.author,
      this.state.sort,
      this.state.order
    )
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
    const hasTopicChanged = prevProps.topic !== this.props.topic;
    const hasAuthorChanged = prevProps.author !== this.props.author;
    const hasSortChanged = prevState.sort !== this.state.sort;
    const hasOrderChanged = prevState.order !== this.state.order;
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
