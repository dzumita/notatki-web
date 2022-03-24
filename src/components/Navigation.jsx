import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const Nav = styled.nav`
  background: ${props => props.theme.colors.currentLine};
  padding: 1em;
  padding-top: 2.2em;
  flex-basis: 240px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
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
