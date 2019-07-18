import React, { Component } from 'react';
import { getArticleById } from '../api';
import Comments from './Comments';
import Loading from './loading';
import ErrorPage from './error-page';
import Voter from './Voter';
import dateFormatter from './dateFormatter';

class Article extends Component {
  state = {
    article: '',
    isLoading: true,
    err: null,
    showComments: false
  };
  render() {
    const { article, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading article..." />;
    return (
      <>
        <div>
          <p>
            <strong>{article.topic}</strong>
            <label> posted by </label>
            {article.author}
            <label> created at </label>
            {/* {this.formatDate(article.created_at)} */}
            {dateFormatter(article.created_at)}
          </p>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <Voter
            type="articles"
            id={article.article_id}
            votes={article.votes}
          />

          {article.comment_count}
          <label> </label>
          <button onClick={this.handleClick}>comments</button>

          {this.state.showComments === true && (
            <Comments
              article_id={this.props.article_id}
              loggedInUser={this.props.loggedInUser}
            />
          )}
        </div>
      </>
    );
  }

  // formatDate = created_at => {
  //   return new Date(created_at).toLocaleString();
  // };

  handleClick = () => {
    this.setState({ showComments: true });
  };

  fetchArticle = () => {
    getArticleById(this.props.article_id)
      .then(({ article }) => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticle();
    }
  }
}

export default Article;
