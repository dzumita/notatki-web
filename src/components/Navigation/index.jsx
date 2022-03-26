import React from 'react';
import { useQuery } from '@apollo/client';

import Link from '../Link';

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
          <Link icon="🏠" to="/" alt="Home" />
        </li>
        <li>
          <Link icon="📓" to="/notes" alt="Notes" />
        </li>
        <li>
          <Link icon="🌟" to="/favorites" alt="Favorites" />
        </li>
      </NavList>

      <NavList>
        {data.isLoggedIn ? (
          <li>
            <Link onClick={handleLogout} icon="⬅️" alt="Log Out" />
          </li>
        ) : (
          <React.Fragment>
            <li>
              <Link to="/signin" icon="🚪" alt="Sign In" />
            </li>
            <li>
              <Link to="/signup" icon="🔑" alt="Sign Up" />
            </li>
          </React.Fragment>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
