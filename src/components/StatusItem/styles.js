import styled from 'styled-components';

const StyledStatusItem = styled.div`
  color: ${props => props.theme.colors.foreground};
  text-decoration: none;
  font-weight: bold;
  font-size: 2em;
  width: 100%;
  padding: 0.2em;
  text-align: center;
`;

export { StyledStatusItem };
