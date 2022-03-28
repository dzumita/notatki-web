import React from 'react';

import { StyledStatusItem } from './styles';

const StatusItem = ({ as }) => {
  let status = '❎ Error';
  switch (as) {
    case 'load':
      status = '🔃 Loading...';
      break;
    case 'not note':
      status = '❎ Error! Note not found';
      break;
    case 'error sign in':
      status = '❎ Error signing in!';
      break;
    case 'error create acc':
      status = '❎ Error creating an account!';
      break;
    case 'error save note':
      status = '❎ Error saving the note!';
      break;
  }

  return <StyledStatusItem>{status}</StyledStatusItem>;
};

export default StatusItem;
