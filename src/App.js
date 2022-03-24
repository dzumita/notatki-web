import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

import GlobalStyle from '/components/GlobalStyle';

import Routes from '/Routes';

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Routes />
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
