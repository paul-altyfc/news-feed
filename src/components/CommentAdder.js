import React, { Component } from 'react';
import { postComment } from '../api';
import ErrorPage from './error-page';

class CommentAdder extends Component {
  state = {
    body: '',
    err: null
  };
  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="body">Add a new comment: </label>
        <input
          type="text"
          id="body"
          required={true}
          onChange={e => this.handleChange(e.target.value, 'body')}
        />
        <button>New Comment</button>
      </form>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    const { article_id, loggedInUser } = this.props;
    postComment(article_id, { body, username: loggedInUser })
      .then(newlyPostedComment => {
        this.props.addComment(newlyPostedComment);
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default CommentAdder;
