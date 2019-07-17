import React, { Component } from 'react';
import ErrorPage from './error-page';
import { vote } from '../api';

class Voter extends Component {
  state = {
    voteModifier: 0,
    err: null
  };
  render() {
    const { voteModifier, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <button onClick={() => this.vote(1)} disabled={voteModifier === 1}>
          +1
        </button>
        <p>Votes: {this.props.votes + voteModifier}</p>
        <button onClick={() => this.vote(-1)} disabled={voteModifier === -1}>
          -1
        </button>
      </div>
    );
  }

  vote = num => {
    vote(this.props.type, this.props.id, num).catch(err => {
      this.setState({ err });
    });

    this.setState(state => {
      return { voteModifier: state.voteModifier + num };
    });
  };
}

export default Voter;
