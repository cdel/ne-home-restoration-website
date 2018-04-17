import React from 'react';
import {Image} from 'react-bootstrap';
import './Image.scss';

const Image = props => {
  return (
    <figure className="ImageComponent">
      <Image {...props} />
    </figure>
  );
}

export default Image;