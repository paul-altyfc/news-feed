import React, { Component } from 'react';
import Loading from './Loading';
import ErrorPage from './Error-page';
import { getCommentsByArticleId, deleteCommentById } from '../api';
import CommentAdder from './CommentAdder';
import Voter from './Voter';
import styles from '../css/Comments.module.css';

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
        <CommentAdder
          article_id={this.props.article_id}
          loggedInUser={this.props.loggedInUser}
          addComment={this.addComment}
        />
        <h4 className={styles.h4}>comments</h4>
        <ul className={styles.ul}>
          {comments.map(comment => {
            return (
              <li className={styles.li} key={comment.comment_id}>
                <h5 className={styles.h5}>{comment.author}</h5>
                <p className={styles.p}>{comment.body}</p>
                {this.props.loggedInUser === comment.author && (
                  <p>
                    <button
                      className={styles.deletebtn}
                      onClick={() => this.deleteComment(comment.comment_id)}
                    >
                      Delete
                    </button>
                  </p>
                )}
                <Voter
                  type="comments"
                  id={comment.comment_id}
                  votes={comment.votes}
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  addComment = newComment => {
    this.setState(state => {
      return { comments: [newComment, ...state.comments] };
    });
  };

  deleteComment = id => {
    deleteCommentById(id)
      .then(() => {
        this.setState(({ comments }) => {
          return {
            comments: comments.filter(comment => comment.comment_id !== id)
          };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  fetchComments = () => {
    getCommentsByArticleId(this.props.article_id)
      .then(({ comments }) => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }
}

export default Comments;
