export function changeAlbum(albumId) {
  return {
    type: 'FETCH_ALBUM_IMAGES',
    payload: {activeAlbum: albumId}
  };
}

export function fetchAlbumPhotos(albumId) {
  return {
    type: 'FETCH_ALBUM_IMAGES',
    payload: {activeAlbum: albumId}
  };
}