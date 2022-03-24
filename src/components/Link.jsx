import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Icon = styled.span`
  margin-right: 1em;
`;

const Link = ({ icon = '🏠', to = '/', children = 'Home' }) => {
  return (
    <RouterLink to={to}>
      <Icon aria-hidden="true" role="img">
        {icon}
      </Icon>
      {children}
    </RouterLink>
  );
};

export default Link;
