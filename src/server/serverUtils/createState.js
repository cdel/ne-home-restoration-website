import {fetchAlbumData} from '_serverApis/flickr';
import rawData from '_data/rawData';

const data = {...rawData};

const fetchFlickrAlbums = () => (
  Promise.all(data.gallery.albums.map(album => {
    return fetchAlbumData(album.albumId);
  })).then(albums => {
    data.gallery.albums = albums;
  })
);

export const createState = () => {
  return Promise.all([
    fetchFlickrAlbums()
  ]).then(() => {
    return data;
  });
};


