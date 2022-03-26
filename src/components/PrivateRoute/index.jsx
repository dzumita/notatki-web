import React from 'react';
import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import StatusItem from '../StatusItem';

import { IS_LOGGED_IN } from './queries';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;

  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
