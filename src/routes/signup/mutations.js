import { useMutation, useApolloClient, gql } from '@apollo/client';

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export { SIGNUP_USER }