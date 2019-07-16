import React, { Component } from 'react';
import { getArticleById } from '../api';
import { Link } from '@reach/router';

class Article extends Component {
  state = { article: '' };
  render() {
    // console.log(this.state.article, 'in article');

    const { article } = this.state;
    return (
      <>
        <h3>Article</h3>
        <Link to="../">Back</Link>{' '}
        <div>
          {/* {console.log(article)} */}
          <p>{article.body}</p>
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
