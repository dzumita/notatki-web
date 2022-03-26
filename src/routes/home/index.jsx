import React from 'react';
import { useQuery } from '@apollo/client';

import StatusItem from '../../components/StatusItem';
import Button from '../../components/Button';
import Note from '../../components/Note';

import { GET_NOTES } from './queries';
import { Wrapper } from './styles';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  if (loading) return <StatusItem as="load" />;
  if (error) return <StatusItem />;

  const handleOnClick = () =>
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            notes: [
              ...previousResult.noteFeed.notes,
              ...fetchMoreResult.noteFeed.notes
            ],
            __typename: 'noteFeed'
          }
        };
      }
    });

  return (
    <Wrapper>
      {data.noteFeed.notes.map(note => (
        <Note note={note} key={note.id} />
      ))}

      {data.noteFeed.hasNextPage && (
        <Button onClick={handleOnClick}>Load more</Button>
      )}
    </Wrapper>
  );
};

export default Home;
