import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import styled, { ThemeProvider } from 'styled-components';

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({ uri, cache, connectToDevTools: true });

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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
