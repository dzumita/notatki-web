import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import IconLink from '../IconLink';
import { DELETE_NOTE } from '../../gql/mutations';
import { GET_MY_NOTES, GET_NOTES } from '../../gql/queries';

const DeleteNote = props => {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId
    },
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: data => {
      props.history.push('/mynotes');
    }
  });

  return <IconLink onClick={deleteNote} icon="🗑️" />;
};

export default withRouter(DeleteNote);
