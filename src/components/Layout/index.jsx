import React from 'react';

import Navigation from '../Navigation';

import { Wrapper, Main } from './styles';

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Main>{children}</Main>
  </Wrapper>
);

export default Layout;
