import { gql } from '@apollo/client';

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export { SIGNIN_USER };
