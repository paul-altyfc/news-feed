import React, { Component } from 'react';
import Loading from './loading';
import ErrorPage from './error-page';
import { getCommentsByArticleId } from '../api';
import { Link } from '@reach/router';

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null
  };

  render() {
    const { comments, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading comments..." />;

    return (
      <>
        <Link to="../">Back</Link>
        <h5>comments</h5>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <h5>{comment.author}</h5>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  fetchComments = () => {
    getCommentsByArticleId(this.props.article_id).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
    });
  };

  componentDidMount() {
    // console.log('article mount');
    this.fetchComments();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.topic !== this.props.topic) {
  //     this.fetchComments();
  //   }
}

export default Comments;
