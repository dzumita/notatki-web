import React from 'react';
import { useQuery } from '@apollo/client';

import StatusItem from '../../components/StatusItem';
import Note from '../../components/Note';
import { GET_MY_FAVORITES } from '../../gql/queries';

import { Wrapper } from './styles';

const Favorites = () => {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES);

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;

  if (data.me.favorites.length !== 0) {
    return (
      <Wrapper>
        {data.me.favorites.map(note => (
          <Note note={note} key={note.id} />
        ))}
      </Wrapper>
    );
  } else {
    return <Wrapper>No favorites yet</Wrapper>;
  }
};

export default Favorites;
