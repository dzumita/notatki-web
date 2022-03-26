import React from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import StatusItem from '../../components/StatusItem';
import UserForm from '../../components/UserForm';

import { SIGNIN_USER } from './mutations';

const SignIn = props => {
  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signIn);
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem as="error sign in" />;

  return <UserForm action={signIn} formType="signIn" />;
};

export default SignIn;
