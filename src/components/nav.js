import React from 'react';
import NavLink from './nav-link';
// import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/topics">Topics</NavLink> */}
      <NavLink to="/articles">Articles</NavLink>
    </nav>
  );
};

export default Nav;
