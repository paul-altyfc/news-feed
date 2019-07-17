import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => {
  return (
    <Link
      {...props}
      className={`${props.className} nav-link`}
      getProps={({ isCurrent }) => {
        return {
          style: {
            borderBottom: isCurrent ? '0px solid white' : '0'
          }
        };
      }}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
