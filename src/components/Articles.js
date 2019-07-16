import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './loading';
import ErrorPage from './error-page';
import { Link } from '@reach/router';
import styles from './Articles.module.css';

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading articles..." />;

    return (
      <div className={styles.container}>
        {/* {console.log(this.props)} */}
        <h2>Articles</h2>
        <Link to="../">Back</Link>
        <ul className={styles.list}>
          {articles.map(article => {
            return (
              <li className={styles.listitem} key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>

                <Link to={`/topics/${article.topic}`}>
                  <h5>Topic: {article.topic}</h5>
                </Link>

                <Link to={`/authors/${article.author}`}>
                  <h5>Author: {article.author}</h5>
                </Link>

                {this.props.loggedInUser ? (
                  <button>Great Article!</button>
                ) : (
                  <button type="button" disabled>
                    Great Article!
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        {/* <Article
          loggedInUser={this.props.loggedInUser}
          article_id={this.state.articles.article_id}
          path="/:article_id"
        /> */}
      </div>
    );
  }

  fetchArticles = () => {
    console.log(this.props);
    getArticles(this.props.topic, this.props.author).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    console.log('articles mount');
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.author);
    console.log(this.props.author);
    if (
      prevProps.topic !== this.props.topic ||
      prevProps.author !== this.props.author
    ) {
      this.fetchArticles();
    }
  }
}

export default Articles;
