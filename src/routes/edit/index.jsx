import React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import NoteForm from '../../components/NoteForm';
import StatusItem from '../../components/StatusItem';
import { GET_NOTE, GET_ME } from '../../gql/queries';
import { EDIT_NOTE } from '../../gql/mutations';

const EditNote = props => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  const { data: userdata } = useQuery(GET_ME);
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id
    },
    onCompleted: () => {
      props.history.push(`/note/${id}`);
    }
  });

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;
  if (userdata.me.id !== data.note.author.id) {
    return <StatusItem as="not access" />;
  }

  return <NoteForm content={data.note.content} action={editNote} />;
};

export default EditNote;
