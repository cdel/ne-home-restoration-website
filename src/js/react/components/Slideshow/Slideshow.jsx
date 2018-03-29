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
        >
        {photos.length ? (
          photos.map((photo, index) => (
            <Carousel.Item key={`${photo.alt}-${index}`} direction={direction}>
              <div className="Slideshow-imageWrapper" style={{height: `${height}px`}}>
                <img onClick={this.togglePreview} alt={photo.alt} src={photo.src} />
              </div>
              <Carousel.Caption>
                <h3>{photo.alt}</h3>
                {photo.description && (
                  <p>{photo.description}</p>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          ))
        ) : (
          <div className="Slideshow is-loading">Slideshow is loading your images!</div>
        )}
        </Carousel>
        {isPreviewOpen && (
          <Lightbox
            mainSrc={photos[activePhoto].src}
            onCloseRequest={this.togglePreview}
          />
        )}
      </div>
    );
  }
}

Slideshow.defaultProps = {
  height: 500
};

Slideshow.propTypes = {
  height: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.shape({src: PropTypes.string, alt: PropTypes.string})).isRequired,
}

export default Slideshow;