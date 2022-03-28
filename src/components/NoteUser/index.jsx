import React from 'react';
import { useQuery } from '@apollo/client';

import IconLink from '../IconLink';
import StatusItem from '../StatusItem';
import DeleteNote from '../DeleteNote';
import FavoriteNote from '../FavoriteNote';
import { GET_ME } from '../../gql/queries';

import { Wrapper } from './styles';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;

  return (
    <Wrapper>
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <IconLink to={`/edit/${props.note.id}`} icon="🖊️" />
          <DeleteNote noteId={props.note.id} />
        </React.Fragment>
      )}
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      />
    </Wrapper>
  );
};

export default NoteUser;
