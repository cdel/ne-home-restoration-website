/*
 A set of methods to fetch data from the Flickr server APIs
*/
import { apiKeys } from '_constants/app_constants';
import axios from 'axios'

export const fetchPhotoData = (photoId, addValues) => {
  const photoDataUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKeys.flickr}&photo_id=${photoId}&format=json&nojsoncallback=1`;
  return axios.get(photoDataUrl).then(data => {
    const sizes = data.data.sizes.size.reduce((acc, size) => {
      // Only interested in sizes with larger resolution
      const isOriginal = /original/ig.test(size.label);
      const sizeName = /\d+/ig.test(size.label) ? size.label.match(/\w+/)[0].toLowerCase() : '';

      // Add sizes with higher resolutions
      if (!sizeName) {
        return acc;
      } else if (isOriginal) {
        acc.id = photoId,
        acc.src = size.source;
        acc.width = size.width;
        acc.height = size.height;
        Object.assign(acc, addValues);
        return acc;
      }

      acc[sizeName] = {
        width: size.width,
        height: size.height,
        src: size.source,
        ...addValues
      };

      return acc;
    }, {});
    return sizes;
  }).catch(error => {
    console.log('Failed to load photo data!');
    return {};
  });
}

export const fetchAlbumData = (albumId) => {
  const albumDataUrl = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKeys.flickr}&photoset_id=${albumId}&format=json&nojsoncallback=1`;
  return axios.get(albumDataUrl).then(data => {
    const promises = data.data.photoset.photo.map(photo => {
      return fetchPhotoData(photo.id, {title: photo.title});
    });
    return Promise.all(promises).then(photos => {
      return {
        title: data.data.photoset.title,
        albumId,
        photos
      };
    })
  }).catch(error => {
    console.log('Failed to load Album data!', error);
    return {};
  });
}