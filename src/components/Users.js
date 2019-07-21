import React, { Component } from 'react';
import { getUsers } from '../api';
//import styles from '../css/Users.module.css';
import Loading from './loading';
import ErrorPage from './error-page';

class Users extends Component {
  state = {
    users: [],
    selectedUser: 'jessjelly',
    isLoading: true,
    err: null
  };

  render() {
    const { users, selectedUser, isLoading, err } = this.state;
    console.log(this.props);
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <Loading text="Loading users..." />;
    return (
      <select value={selectedUser} onChange={this.handleChange.bind(this)}>
        {users.map(user => {
          return (
            <option key={user.username} value={user.username}>
              {user.name}
            </option>
          );
        })}
      </select>
    );
  }
  fetchUsers = () => {
    getUsers()
      .then(({ users }) => {
        this.setState({ users, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  handleChange(e) {
    console.log(e.target.value);
    console.log(this.props);
    this.props.updateParent(e.target.value);
  }

  componentDidMount() {
    this.fetchUsers();
  }
}
export default Users;
