function gallery(state = {}, action) {
  let retval;
  switch (action.type) {
    case 'CHANGE_ALBUM':
      retval = Object.assign({}, state, {activeAlbum: action.payload.activeAlbum});
      break;
    default:
      retval = state;
  }
  return retval;
}

export default gallery;