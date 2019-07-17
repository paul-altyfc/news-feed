import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './loading';
import ErrorPage from './error-page';
import { Link } from '@reach/router';
import styles from './Articles.module.css';
import Voter from './Voter';
import Sorter from './Sorter';
import Orderer from './Orderer';

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
      <div className={styles.container}>
        {/* {console.log(this.props)} */}
        <h2>Articles</h2>
        <div>
          <Sorter setSort={this.setSort} />
          <Orderer setOrder={this.setOrder} />
          {console.log(this.state.order)}
        </div>
        {/* <Link to="../">Back</Link> */}
        <ul className={styles.list}>
          {articles.map(article => {
            return (
              <li className={styles.listitem} key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>

                <Link to={`/topics/${article.topic}`}>
                  <p>Topic: {article.topic}</p>
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
    ).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    console.log('articles mount');
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
