import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Note from './Note';

const NoteWrapper = styled.div`
  padding: 1em;
  max-width: 800px;
  background: ${props => props.theme.colors.currentLine};
`;

const NoteFeed = ({ notes }) => {
  return (
    <React.Fragment>
      {notes.map(note => (
        <NoteWrapper key={note.id}>
          <Note note={note} />
          <Link to={`note/${note.id}`}>Permalink</Link>
        </NoteWrapper>
      ))}
    </React.Fragment>
  );
};

export default NoteFeed;
