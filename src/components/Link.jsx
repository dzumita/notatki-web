import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)`
  color: ${props => props.theme.colors.foreground};
  text-decoration: none;
  font-weight: bold;
  font-size: 2em;

  &:visited {
    color: ${props => props.theme.colors.foreground};
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

const Link = ({ icon = '🏠', to = '/', onClick, alt = 'icon link' }) => (
  <StyledLink to={to}>
    <span aria-hidden="true" role="img" onClick={onClick} alt={alt}>
      {icon}
    </span>
  </StyledLink>
);

export default Link;
