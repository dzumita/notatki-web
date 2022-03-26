import styled from 'styled-components';

const Nav = styled.nav`
  background: ${props => props.theme.colors.background};
  padding: 1em;
  padding-top: 2.2em;
  flex-basis: content-fit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavList = styled.ul`
  background: ${props => props.theme.colors.currentLine};
  border-radius: ${props => props.theme.border.radius};
  padding: 1em;
  margin: 0;
  list-style: none;
  line-height: 2;
`;

export { Nav, NavList };
