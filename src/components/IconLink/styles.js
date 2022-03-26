import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledIconLink = styled(Link)`
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

export { StyledIconLink }