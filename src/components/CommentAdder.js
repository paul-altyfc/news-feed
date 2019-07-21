import React, { Component } from 'react';
import { postComment } from '../api';
import ErrorPage from './error-page';
import styles from '../css/CommentAdder.module.css';

class CommentAdder extends Component {
  static INITIAL_STATE = {
    body: '',
    err: null
  };

  state = CommentAdder.INITIAL_STATE;

  render() {
    const { err } = this.state;
    if (err) return <ErrorPage err={err} />;

    return (
      <form onSubmit={this.handleSubmit}>
        <span className={styles.form}>
          <p className={styles.commenttext}>Add a new comment: </p>
          <input
            type="text"
            id="body"
            className={styles.inputbox}
            required={true}
            onChange={e => this.handleChange(e.target.value, 'body')}
          />
          <button className={styles.commentbtn}>New Comment</button>
        </span>
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
        console.log(CommentAdder.INITIAL_STATE);
        this.setState({ body: '' });
        console.log(this.state);
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default CommentAdder;
