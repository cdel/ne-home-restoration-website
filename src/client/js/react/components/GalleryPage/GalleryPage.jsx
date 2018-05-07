import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import Slideshow from '_components/Slideshow/Slideshow';

const API_KEY = "067d073d001ed3cf049fb0dc97ab54c6";

class GalleryPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleAlbumChange = (albumId) => (e) => {
      this.props.handleAlbumChange(albumId);
    };
  }

  render() {
    const {albums, slideshow} = this.props;
    return (
      <div>
        {albums.map(album => (
          <button key={album.albumId} disabled={album.albumId === slideshow.album.albumId} onClick={this.handleAlbumChange(album.albumId)}>{album.title}</button>
        ))}
        <Slideshow photos={slideshow.album.photos} />
      </div>
    );
  }
}


export default GalleryPage;