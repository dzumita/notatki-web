import React from 'react';
import { useQuery } from '@apollo/client';

import StatusItem from '../../components/StatusItem';
import Note from '../../components/Note';
import { GET_MY_NOTES } from '../../gql/queries';

import { Wrapper } from './styles';

const MyNotes = () => {
  const { loading, error, data } = useQuery(GET_MY_NOTES);

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;

  if (data.me.notes.length !== 0) {
    return (
      <Wrapper>
        {data.me.notes.map(note => (
          <Note note={note} key={note.id} />
        ))}
      </Wrapper>
    );
  } else {
    return <Wrapper>No notes yet</Wrapper>;
  }
};

export default MyNotes;
