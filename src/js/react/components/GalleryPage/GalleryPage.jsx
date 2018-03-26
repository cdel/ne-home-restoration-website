import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

const API_KEY = "067d073d001ed3cf049fb0dc97ab54c6";

class GalleryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePhoto: 0,
      isOpen: false,
      photos: []
    }
    this.openPreview = (photoIndex) => (e) => {
      this.setState({activePhoto: photoIndex, isOpen: true});
    };
    this.closePreview = (e) => this.setState({isOpen: false});
    this.handlePrevPress = (e) => {
      this.setState(prevState => (
        {
          activePhoto: (prevState.activePhoto + prevState.photos.length - 1) % prevState.photos.length
        }
      ));
    };
    this.handleNextPress = (e) => {
      this.setState(prevState => (
        {
          activePhoto: (prevState.activePhoto + prevState.photos.length + 1) % prevState.photos.length
        }
      ));
    };
    this.handleAlbumChange = (albumId) => (e) => {
      this.props.handleAlbumChange(albumId);
    };
  }

  fetchPhotos(albumId) {
    return (new Promise((res, rej) => {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${albumId}&format=json&nojsoncallback=1`;
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          res(JSON.parse(this.responseText));
        } else if (this.status === 404) {
          rej('Failed to fetch photos from album');
        }
      };
      xhr.open('GET', url);
      xhr.send();
    }));
  }

  createImageUrl({farm, server, id, secret}) {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  }

  componentDidMount() {
    this.fetchPhotos(this.props.activeAlbum).then(album => {
      const photos = album.photoset.photo.map(photo => ({
        src: this.createImageUrl(photo),
        alt: photo.title
      }));
      this.setState(state => ({photos}));
    });
  }

  render() {

    const { activePhoto, isOpen, photos } = this.state;
    const {albums, activeAlbum} = this.props;

    return (
      <div>
        {albums.map(album => (
          <button key={album.albumId} disabled={album.albumId === activeAlbum} onClick={this.handleAlbumChange(album.albumId)}>{album.name}</button>
        ))}
        {this.state.photos.map((photo, index) => (
            <img onClick={this.openPreview(index)} key={photo.src} src={photo.src} alt={photo.alt} />
        ))}
        {isOpen && (
          <Lightbox
            mainSrc={photos[activePhoto].src}
            nextSrc={photos[(activePhoto + 1) % photos.length].src}
            prevSrc={photos[(activePhoto + photos.length - 1) % photos.length].src}
            onCloseRequest={this.closePreview}
            onMovePrevRequest={this.handlePrevPress}
            onMoveNextRequest={this.handleNextPress}
          />
        )}
      </div>
    );
  }
}


export default GalleryPage;