import axios from 'axios';
import * as galleryActions from '_actions/gallery/gallery_actions';

const API_KEY = "067d073d001ed3cf049fb0dc97ab54c6";
const fetchAlbumPhotos = albumId => {
  return dispatch => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${albumId}&format=json&nojsoncallback=1`;
    dispatch(galleryActions.fetchAlbumPhotos(axios.get(url)));
  };
}
export default {
  fetchAlbumPhotos
};