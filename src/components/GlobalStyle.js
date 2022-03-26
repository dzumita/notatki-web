import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body,
  html, 
  #root {
    background-color: ${props => props.theme.colors.background};
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    line-height: 1.4;
  }

  a:link {
    color: ${props => props.theme.colors.purple};

    &:hover {
      border: ${props => props.theme.colors.purple} 1px solid;
      border-radius: ${props => props.theme.border.radius};
      padding: 0.1em 0.4em;
    }
  }

  a:visited {
    color: ${props => props.theme.colors.pink};

    &:hover {
      border: ${props => props.theme.colors.pink} 2px solid;
      border-radius: ${props => props.theme.border.radius};
      padding: 0 0.3em;
    }
  }

  code,
  pre {
    max-width: 100%;
    overflow: auto;
    margin: 0 auto;
    color: ${props => props.theme.colors.comment};
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.currentLine};
  }

  ::-webkit-scrollbar-thumb {
    background:  ${props => props.theme.colors.purple};
    border-radius: ${props => props.theme.border.radius};
  }
`;
