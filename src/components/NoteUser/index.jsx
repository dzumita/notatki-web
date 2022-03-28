import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import IconLink from '../IconLink';
import StatusItem from '../StatusItem';
import DeleteNote from '../DeleteNote';
import FavoriteNote from '../FavoriteNote';
import { GET_ME } from '../../gql/queries';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;

  return (
    <React.Fragment>
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      />
      <br />
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <IconLink to={`/edit/${props.note.id}`} icon="🖊️" /> <br />
          <DeleteNote noteId={props.note.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NoteUser;
