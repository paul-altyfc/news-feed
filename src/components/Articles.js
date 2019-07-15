import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './loading';
import ErrorPage from './error-page';
import { Link } from '@reach/router';

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
                <Link to={`${article.topic}`}>
                  <h4>Topic: {article.topic}</h4>
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
      </>
    );
  }

  fetchArticles = () => {
    getArticles(this.props.topic).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
      console.log(this.state.articles);
    });
  };

  componentDidMount() {
    console.log('articles mount');
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.topic, 'prev Topic');
    console.log(this.props.topic, 'this Topic');

    if (prevProps.topic != this.props.topic) {
      this.fetchArticles();
    }
  }
}

export default Articles;
