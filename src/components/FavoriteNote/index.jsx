import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import IconLink from '../IconLink';
import { TOGGLE_FAVORITE } from '../../gql/mutations';
import { GET_MY_FAVORITES } from '../../gql/queries';

import { Wrapper, Count } from './styles';

const FavoriteNote = props => {
  const [count, setCount] = useState(props.favoriteCount);
  const [favorited, setFavorited] = useState(
    props.me.favorites.filter(note => note.id === props.noteId).length > 0
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: props.noteId
    },
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  });

  return (
    <Wrapper>
      {favorited ? (
        <IconLink
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount(count - 1);
          }}
          icon="🌟"
          data-cy="favorite"
        />
      ) : (
        <IconLink
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}
          icon="⭐"
          data-cy="favorite"
        />
      )}
      <Count>: {count}</Count>
    </Wrapper>
  );
};

export default FavoriteNote;
