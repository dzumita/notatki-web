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
    case 'not access':
      status = '🔒 You do not have access to edit this note!';
      break;
  }

  return <StyledStatusItem>{status}</StyledStatusItem>;
};

export default StatusItem;
