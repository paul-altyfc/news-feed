import React, { Component } from 'react';
import NavLink from './Nav-link';
import styles from '../css/Nav.module.css';
import Users from './Users';

export class Nav extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <nav className={styles.navbar}>
        <NavLink className={styles.links} to="/">
          <button className={styles.btn}>
            <i className="fa fa-home" /> Articles
          </button>
        </NavLink>
        <div className={styles.user}>
          <Users
            loggedInUser={loggedInUser}
            updateParent={this.updateParent.bind(this)}
          />
        </div>
      </nav>
    );
  }

  updateParent(value) {
    this.props.updateGrandparent(value);
  }
}

export default Nav;
