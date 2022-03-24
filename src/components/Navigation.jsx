import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const Nav = styled.nav`
  padding: 1em;
  padding-top: 2.2em;
  background: #f5f4f0;
  flex-basis: 240px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link icon="🏠" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link icon="📓" to="/notes">
            Notes
          </Link>
        </li>
        <li>
          <Link icon="🌟" to="/favorites">
            Favorite
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navigation;
