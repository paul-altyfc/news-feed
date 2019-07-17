import React, { Component } from 'react';
import { getArticleById } from '../api';
import Comments from './Comments';
import Loading from './loading';
import ErrorPage from './error-page';

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
            <label> </label>
            {article.created_at}
          </p>
          {/* {console.log(article)} */}
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>
            {article.comment_count}
            <label> </label>
            <button onClick={this.handleClick}>comments</button>
          </p>

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

  handleClick = () => {
    this.setState({ showComments: true });
  };

  fetchArticle = () => {
    getArticleById(this.props.article_id).then(({ article }) => {
      this.setState({ article, isLoading: false });
    });
  };

  componentDidMount() {
    // console.log('article mount');
    this.fetchArticle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticle();
    }
  }
}

export default Article;
