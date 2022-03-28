import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { useQuery } from '@apollo/client';

import StatusItem from '../StatusItem';
import NoteUser from '../NoteUser';
import { IS_LOGGED_IN } from '../../gql/queries';

import { StyledNote, MetaData, MetaInfo, UserActions } from './styles';

const Note = ({ note }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;

  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {format(note.createdAt, 'MMM Do YYYY')}
        </MetaInfo>
        {data.isLoggedIn ? (
          <UserActions>
            <NoteUser note={note} />
          </UserActions>
        ) : (
          <UserActions>
            <em>Favorites:</em> {note.favoriteCount}
          </UserActions>
        )}
      </MetaData>

      <ReactMarkdown source={note.content} />

      <Link to={`note/${note.id}`}>Permalink</Link>
    </StyledNote>
  );
};

export default Note;
