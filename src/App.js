import React from 'react';
import ReactDOM from 'react-dom';

import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

import GlobalStyle from '/components/GlobalStyle';

import Routes from '/Routes';

const theme = {
  colors: {
    background: '#282a36',
    foreground: '#f8f8f2',
    currentLine: '#44475a',
    comment: '#6272a4',
    cyan: '#8be9fd',
    green: '#50fa7b',
    orange: '#ffb86c',
    pink: '#ff79c6',
    purple: '#bd93f9',
    red: '#ff5555',
    yellow: '#f1fa8c'
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
