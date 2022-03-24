import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Icon = styled.span`
  margin-right: 1em;
`;

const StyledLink = styled(RouterLink)`
  color: ${props => props.theme.colors.foreground};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;

  &:visited {
    color: ${props => props.theme.colors.foreground};
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

const Link = ({ icon = '🏠', to = '/', children = 'Home' }) => {
  return (
    <StyledLink to={to}>
      <Icon aria-hidden="true" role="img">
        {icon}
      </Icon>
      {children}
    </StyledLink>
  );
};

export default Link;
