import {fetchAlbumData} from '_apis/flickr';
import rawData from '_data/rawData';
import { fetchPhotoData } from '../apis/flickr';

const data = {...rawData};

const fetchFlickrAlbums = () => (
  Promise.all(data.gallery.albums.map(album => {
    return fetchAlbumData(album.id);
  })).then(albums => {
    data.gallery.albums = albums;
  })
);

const fetchFlickrAssets = assets => (
  Promise.all(data.flickrAssets.map(asset => {
    return fetchPhotoData(asset.id);
  })).then(fetchedAssets => {
    data.flickrAssets = fetchedAssets.reduce((acc, fetchedAsset) => {
      acc[fetchedAsset.id] = fetchedAsset;
      return acc;
    }, {})
  })
)

export const createState = () => {
  if (process.title === "browser") {
    const promise = Promise.resolve(window.__PRELOADED_STATE__);
    delete window.__PRELOADED_STATE__;
    return promise;
  } else {
    return Promise.all([
      fetchFlickrAlbums(),
      fetchFlickrAssets()
    ]).then(() => {
      return data;
    });
  }
};


