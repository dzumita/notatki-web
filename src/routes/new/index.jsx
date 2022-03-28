import React from 'react';
import { useMutation } from '@apollo/client';

import NoteForm from '../../components/NoteForm';
import StatusItem from '../../components/StatusItem';
import { NEW_NOTE } from '../../gql/mutations'
import { GET_MY_NOTES, GET_NOTES } from '../../gql/queries';

const NewNote = props => {
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: data => {
      props.history.push(`note/${data.newNote.id}`);
    }
  });

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem as="error save note" />;

  return <NoteForm action={data} />;
};

export default NewNote;
