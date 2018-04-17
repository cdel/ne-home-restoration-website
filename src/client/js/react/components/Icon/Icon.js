import React from 'react';
import {icons} from '_constants/app_constants';

const Icon = props => {
  const {name} = props;
  const iconFound = Object.keys(icons).find(iconName => iconName.includes(name.toLowerCase()));
  const src = icons[iconFound ? iconFound : 'default'];
  return (
    <img src={src} alt={iconFound} />
  );
};

export default Icon;