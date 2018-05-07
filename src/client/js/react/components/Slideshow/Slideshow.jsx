import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import { Carousel } from 'react-bootstrap';
import './Slideshow.scss';


class Slideshow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPreviewOpen: false,
      activePhoto: 0,
      direction: 'next'
    };
    this.handleSelect = (selectedPhoto, event) => {
      this.setState({activePhoto: selectedPhoto, direction: event.direction});
    };
    this.togglePreview = () => {
      if (!this.props.allowPreview) return;
      this.setState(prevState => ({isPreviewOpen: !prevState.isPreviewOpen}));
    };
  }

  render() {

    const { activePhoto, isPreviewOpen, direction} = this.state;
    const {photos, height} = this.props;

    return (
      <div className="Slideshow">
        <Carousel
          activeIndex={activePhoto}
          direction={direction}
          onSelect={this.handleSelect}
          indicators={this.props.showIndicators}
        >
        {photos.length ? (
          photos.map((photo, index) => (
            <Carousel.Item key={photo.id} direction={direction}>
              <div className="Slideshow-imageWrapper" style={{height: `${photo.height}px`}}>
                <img onClick={this.togglePreview} alt={photo.title} src={photo.src} />
              </div>
              {this.props.showCaption && (
                <Carousel.Caption>
                  <h3>{photo.title}</h3>
                  {photo.description && (
                    <p>{photo.description}</p>
                  )}
                </Carousel.Caption>
              )}
            </Carousel.Item>
          ))) : (
          <div className="Slideshow is-loading">Slideshow is loading your images!</div>
        )}
        </Carousel>
        {isPreviewOpen && (
          <Lightbox
            mainSrc={photos[activePhoto]["original"].src}
            onCloseRequest={this.togglePreview}
          />
        )}
      </div>
    );
  }
}

Slideshow.defaultProps = {
  height: 500,
  showIndicators: true,
  allowPreview: true,
  showCaption: true
};

Slideshow.propTypes = {
  showIndicators: PropTypes.bool,
  showCaption: PropTypes.bool,
  allowPreview: PropTypes.bool,
  height: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.shape({src: PropTypes.string, alt: PropTypes.string})).isRequired,
}

export default Slideshow;