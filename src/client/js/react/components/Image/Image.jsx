import React from 'react';
import {Image} from 'react-bootstrap';
import cx from '_utilities/classnames';
import PropTypes from 'prop-types';
import './Image.scss';

const ImageComponent = props => {
  const {withBorder, ...rest} = props;
  return (
    <figure className={cx("ImageComponent", {
      "ImageComponent--withBorder": withBorder
    })}>
      <Image {...rest} />
    </figure>
  );
}
ImageComponent.propTypes = {
  withBorder: PropTypes.bool
};
ImageComponent.defaultProps = {
  withBorder: false
};

export default ImageComponent;