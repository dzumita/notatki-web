import React from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import StatusItem from '../../components/StatusItem';
import UserForm from '../../components/UserForm';

import { SIGNUP_USER } from './mutations';

const SignUp = props => {
  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signUp);
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem as="error create acc" />;

  return <UserForm action={signUp} formType="signup" />
};

export default SignUp;
