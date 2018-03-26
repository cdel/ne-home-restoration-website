function changeAlbum(albumId) {
  return {
    type: 'CHANGE_ALBUM',
    payload: {activeAlbum: albumId}
  };
}

export {
  changeAlbum
};