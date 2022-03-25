import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Link from './Link';
import ButtonAsLink from './ButtonAsLink';

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

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const Navigation = () => {
  const { data } = useQuery(IS_LOGGED_IN);

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
        {data.isLoggedIn ? (
          <li>
            <ButtonAsLink
              onClick={() => {
                localStorage.removeItem('token');
                client.resetStore();
                client.writeData({ data: { isLoggedIn: false } });
                props.history.push('/');
              }}
            >
              Logout
            </ButtonAsLink>
          </li>
        ) : (
          <React.Fragment>
            <li>
              <Link to={'/signin'}>Sign In</Link>
            </li>
            <li>
              <Link to={'/signup'}>Sign Up</Link>
            </li>
          </React.Fragment>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
