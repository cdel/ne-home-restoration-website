export default function gallery(state = {}, action) {
  let retval;
  switch (action.type) {
    case 'FETCH_ALBUM_IMAGES':
      retval = {...state, ...action.payload};
      break;
    case 'FETCH_ALBUM_IMAGES_REJECTED':
      retval = {...state, ...action.payload};
      break;
    case 'FETCH_ALBUM_IMAGES_RESOLVED':
      retval = {...state, ...action.payload};
      break;
    case 'FETCH_ALBUM_IMAGES_PENDING':
      retval = {...state, ...action.payload};
      break;
    default:
      retval = state;
  }
  return retval;
}