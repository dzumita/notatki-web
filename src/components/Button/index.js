import styled from 'styled-components';

const Button = styled.button`
  border-radius: ${props => props.theme.border.radius};
  border: none;
  background-color: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.background};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1em;
  padding: 1em;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  :active {
    transform: scale(0.9);
  }
`;

export default Button;
