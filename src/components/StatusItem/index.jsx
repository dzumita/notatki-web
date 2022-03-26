import React from 'react';

import { StyledStatusItem } from './styles';

const StatusItem = ({ as }) => {
  let status = '❎ Error';
  switch (as) {
    case 'load':
      status = '🔃 Loading...';
      break;
  }

  return <StyledStatusItem>{status}</StyledStatusItem>;
};

export default StatusItem;
