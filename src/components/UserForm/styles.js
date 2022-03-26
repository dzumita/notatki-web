import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.currentLine};
  border-radius: ${props => props.theme.border.radius};
  max-width: 500px;
  padding: 1.2em;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  label {
    display: block;
    line-height: 2em;
  }
`;

const Input = styled.input`
  border-radius: ${props => props.theme.border.radius};
  border: none;
  background-color: ${props => props.theme.colors.foreground};
  color: ${props => props.theme.colors.background};
  font-size: 1em;
  padding: 1em;
  width: 100%;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  :active {
    transform: scale(0.99);
  }

  :focus {
    outline: none;
  }
`;

export { Wrapper, Form, Input };
