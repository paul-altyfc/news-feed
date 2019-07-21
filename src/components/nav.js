import React, { Component } from 'react';
import NavLink from './nav-link';
import styles from '../css/Nav.module.css';
// PMD - Select User code
// import Users from './Users';

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
          Logged in user:
          {/* PMD - Select User code 
          <Users
            loggedInUser={this.props.loggedInUser}
            updateParent={this.updateParent.bind(this)}
          /> */}
          <button className={styles.logonbutton}>
            {loggedInUser}
            <i className="fa fa-user" />
          </button>
        </div>
      </nav>
    );
  }

  // PMD - Select User code
  // updateParent(value) {
  //   console.log(value);
  //   this.props.updateGrandparent(value);
  // }
}

export default Nav;
