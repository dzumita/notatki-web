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
  }

  return <StyledStatusItem>{status}</StyledStatusItem>;
};

export default StatusItem;
