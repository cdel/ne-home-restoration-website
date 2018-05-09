import React from 'react';
import cx from '_utilities/classnames';
import PropTypes from 'prop-types';
import './Image.scss';

const noop = () => {};

// @TODO: Add fullWidth fullHeight props
// @TODO: center image by default!
// @TODO: Add ref magic to have the image always fill the entire available width
// @TODO: Find ways of using the known height and width to mantain the aspect ratio of image
// even at loading state.


class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    console.log('Image component mounted!');
    this.image = new Image();
    this.image.src = this.props.src;
    this.image.onload = () => {
      this.setState(prevState => ({isLoading: false}));
      console.log(`The dimensions for this image are height: ${this.image.height} and width ${this.image.width}`);
    };
  }
  render() {
    const {withBorder, expand, height, width, src, alt, onClick} = this.props;
    const {isLoading} = this.state;
    const styles = width && height ? {width, height} : {};
    return (
      <figure className={cx("ImageComponent", {
        "ImageComponent--withBorder": withBorder,
        "ImageComponent--expand": expand
      })} onClick={onClick}>
        {!isLoading ? (
          <img className="ImageComponent-img" src={src} alt={alt}/>
        ) : (
          <div className="ImageComponent-loader" style={styles}/>
        )}
      </figure>
    );
  }
}
ImageComponent.propTypes = {
  withBorder: PropTypes.bool,
  expand: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func
};
ImageComponent.defaultProps = {
  withBorder: false,
  expand: false,
  height: null,
  width: null,
  alt: '',
  onClick: noop
};

export default ImageComponent;