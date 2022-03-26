import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Main = styled.main`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground};
  padding: 2.2em 2em;
  flex: 1;
  overflow-y: scroll;
`;

export { Wrapper, Main }