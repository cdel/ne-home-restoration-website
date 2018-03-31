function createImage({farm, server, id, secret, title}) {
  const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  return {
    src,
    alt: title
  };
}

export default function gallery(state = {}, action) {
  let retval;
  switch (action.type) {
    case 'CHANGE_ALBUM':
      retval = {...state, slideshow: {...state.slideshow, albumId: action.payload}};
    break;
    case 'FETCH_ALBUM_IMAGES_PENDING':
      retval = {...state, slideshow: {...state.slideshow, fetching: true}};
      break;
    case 'FETCH_ALBUM_IMAGES_REJECTED':
      retval = {...state, slideshow: {...state.slideshow, fetched: false, fetching: false}};
      break;
    case 'FETCH_ALBUM_IMAGES_FULFILLED':
      const photos = action.payload.data.photoset.photo.map(createImage);
      retval = {...state, slideshow: {...state.slideshow, photos}};
      break;
    default:
      retval = state;
  }
  return retval;
}