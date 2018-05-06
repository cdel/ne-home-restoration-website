import React from 'react';
import cx from '_utilities/classnames';
import PropTypes from 'prop-types';
import './Image.scss';

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
      this.setState({isLoading: false});
      console.log(`The dimensions for this image are height: ${this.image.height} and width ${this.image.width}`);
    };
  }
  render() {
    const {withBorder, expand, ...rest} = this.props;
    const {isLoading} = this.state;
    console.log(`RENDERED ON CLIENT: ${!!window}`);
    return (
      <figure className={cx("ImageComponent", {
        "ImageComponent--withBorder": withBorder,
        "ImageComponent--expand": expand
      })}>
        {!isLoading ? (
          <img className="ImageComponent-img" {...rest} />
        ) : (
          <div className="ImageComponent-loader" />
        )}
      </figure>
    );
  }
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