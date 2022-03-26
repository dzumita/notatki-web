import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

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

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
