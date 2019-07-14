import React, { Component } from 'react';
import * as api from '../api';
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
    api.getArticles().then(articles => {
      console.log(articles, 'articles');
    });
    //console.log(articles);

    // api.getArticles().then(articles => {
  }
}

export default Articles;
