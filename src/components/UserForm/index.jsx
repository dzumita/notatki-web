import React, { useState } from 'react';

import Button from '../Button';

import { Wrapper, Form, Input } from './styles';

const UserForm = props => {
  const [values, setValues] = useState();

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Wrapper>
      {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      <Form
        onSubmit={event => {
          event.preventDefault();
          props.action({
            variables: {
              ...values
            }
          });
        }}
      >
        {props.formType === 'signup' && (
          <div>
            <label htmlFor="username">Username:</label>
            <Input
              required
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={onChange}
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Input
            required
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default UserForm;
