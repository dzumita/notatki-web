import React from 'react';
import { useQuery } from '@apollo/client';

import StatusItem from '../../components/StatusItem';
import Note from '../../components/Note';

import { GET_NOTE } from './queries';

const NotePage = props => {
  const id = props.match.params.id;

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <StatusItem as="load"/>;
  if (error) return <StatusItem as="not note"/>;

  return <Note note={data.note} />;
};

export default NotePage;
