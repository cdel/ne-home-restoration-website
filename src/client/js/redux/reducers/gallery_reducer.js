export default function gallery(state = {}, action) {
  let retval;
  switch (action.type) {
    case 'CHANGE_ALBUM':
      retval = {...state, slideshow: {...state.slideshow, albumId: action.payload}};
    break;
    default:
      retval = state;
  }
  return retval;
}