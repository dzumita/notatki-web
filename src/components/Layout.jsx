import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Main = styled.main`
  padding: 2em;
  flex: 1;
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
