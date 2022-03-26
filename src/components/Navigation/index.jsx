import React from 'react';
import { useQuery } from '@apollo/client';

import IconLink from '../IconLink';

import { Nav, NavList } from './styles';
import { IS_LOGGED_IN } from './queries';

const handleLogout = () => {
  localStorage.removeItem('token');
  client.resetStore();
  client.writeData({ data: { isLoggedIn: false } });
  props.history.push('/');
};

const Navigation = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <Nav>
      <NavList>
        <li>
          <IconLink icon="🏠" to="/" alt="Home" />
        </li>
        <li>
          <IconLink icon="📓" to="/notes" alt="Notes" />
        </li>
        <li>
          <IconLink icon="🌟" to="/favorites" alt="Favorites" />
        </li>
      </NavList>

      <NavList>
        {data.isLoggedIn ? (
          <li>
            <IconLink onClick={handleLogout} icon="⬅️" alt="Log Out" />
          </li>
        ) : (
          <React.Fragment>
            <li>
              <IconLink to="/signin" icon="🚪" alt="Sign In" />
            </li>
            <li>
              <IconLink to="/signup" icon="🔑" alt="Sign Up" />
            </li>
          </React.Fragment>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
