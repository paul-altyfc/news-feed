import React, { Component } from 'react';
import { getArticleById } from '../api';
import Comments from './Comments';
import Loading from './loading';
import ErrorPage from './error-page';

class Article extends Component {
  state = {
    article: '',
    isLoading: true,
    err: null
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
          </p>
          {/* {console.log(article)} */}
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>{article.comment_count} comments</p>
          <Comments article_id={this.props.article_id} />
        </div>
      </>
    );
  }

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
