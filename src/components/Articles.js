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
        <h2>Articles</h2>
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
