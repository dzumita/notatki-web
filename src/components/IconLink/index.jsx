import React from 'react';

import { StyledIconLink } from './styles';

const IconLink = ({ icon = '🏠', to = '/', alt = 'icon link', ...props }) => (
  <StyledIconLink to={to}>
    <span aria-hidden="true" role="img" alt={alt} {...props}>
      {icon}
    </span>
  </StyledIconLink>
);

export default IconLink;
