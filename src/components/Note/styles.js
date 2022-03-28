import styled from 'styled-components';

const StyledNote = styled.article`
  background: ${props => props.theme.colors.currentLine};
  border-radius: ${props => props.theme.border.radius};
  padding: 1.2em;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  a:link {
    color: ${props => props.theme.colors.purple};
  }

  a:visited {
    color: ${props => props.theme.colors.pink};
  }
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

export { StyledNote, MetaData, MetaInfo, UserActions };
