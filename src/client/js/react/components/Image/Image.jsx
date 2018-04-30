import React from 'react';
import cx from '_utilities/classnames';
import PropTypes from 'prop-types';
import './Image.scss';

const ImageComponent = props => {
  const {withBorder, expand, ...rest} = props;
  return (
    <figure className={cx("ImageComponent", {
      "ImageComponent--withBorder": withBorder,
      "ImageComponent--expand": expand
    })}>
      <img className="ImageComponent-img" {...rest} />
    </figure>
  );
}
ImageComponent.propTypes = {
  withBorder: PropTypes.bool,
  expand: PropTypes.bool
};
ImageComponent.defaultProps = {
  withBorder: false,
  expand: false
};

export default ImageComponent;