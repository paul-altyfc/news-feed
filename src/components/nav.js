import React from 'react';
import NavLink from './nav-link';
import styles from './Nav.module.css';

const Nav = props => {
  const { loggedInUser } = props;
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.links} to="/">
        Articles
      </NavLink>
      <p className={styles.user}>Logged in user: {loggedInUser}</p>
    </nav>
  );
};

export default Nav;
