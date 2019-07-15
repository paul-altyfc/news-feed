import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './loading';
import ErrorPage from './error-page';

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
      <>
        {console.log(this.props)}
        <h2>Articles</h2>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id}>
                <h3>{article.title}</h3>
                <h4>Topic: {article.topic}</h4>
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
      </>
    );
  }

  componentDidMount() {
    console.log('articles mount');
    getArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
      console.log(this.state.articles);
    });
  }
}

export default Articles;
