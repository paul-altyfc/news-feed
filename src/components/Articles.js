import React, { Component } from 'react';
import { getArticles } from '../api';
import Loading from './loading';
import ErrorPage from './error-page';
import { Link } from '@reach/router';
import Article from './Article';

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
        {/* {console.log(this.props)} */}
        <h2>Articles</h2>
        <Link to="../">Back</Link>
        <ul>
          {articles.map(article => {
            console.log(article);
            return (
              <li key={article.article_id}>
                {/* <Link to={`${article.articles_id}`}> */}
                <h3>{article.title}</h3>
                <Article id={article.article_id} />
                {/* </Link> */}

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
        {/* <Article
          loggedInUser={this.props.loggedInUser}
          article_id={this.state.articles.article_id}
          path="/:article_id"
        /> */}
      </>
    );
  }

  fetchArticles = () => {
    getArticles(this.props.topic).then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    console.log('articles mount');
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
}

export default Articles;
