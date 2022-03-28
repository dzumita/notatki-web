import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  background: ${props => props.theme.colors.currentLine};
  border-radius: ${props => props.theme.border.radius};
  color: ${props => props.theme.colors.foreground};
  padding: 1em;
  margin-bottom: 1em;
  width: 100%;
  height: 90%;

  ::placeholder {
    color: ${props => props.theme.colors.purple};
  }

  :focus {
    outline: none;
  }
`;

export { Wrapper, Form, TextArea }