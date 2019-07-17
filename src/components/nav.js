import React from 'react';
import NavLink from './nav-link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">Articles</NavLink>
    </nav>
  );
};

export default Nav;
