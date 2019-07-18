import React from 'react';
import NavLink from './nav-link';
import styles from './Nav.module.css';

const Nav = props => {
  const { loggedInUser } = props;
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.links} to="/">
        <button class="btn">
          <i class="fa fa-home" /> Articles
        </button>
      </NavLink>
      <p className={styles.user}>
        Logged in user:
        <button className={styles.logonbutton}>
          {loggedInUser}
          <i class="fa fa-user" />
        </button>
      </p>
    </nav>
  );
};

export default Nav;
