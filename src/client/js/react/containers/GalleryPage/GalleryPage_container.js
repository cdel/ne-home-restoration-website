import {changeAlbum} from '_actions/gallery/gallery_actions';
import galleryThunks from '_thunks/gallery/gallery_thunks';
import {connect} from 'react-redux';
import GalleryPage from '_components/GalleryPage/GalleryPage';

// Get apps state and pass it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    slideshow: state.gallery.slideshow,
    albums: state.gallery.albums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAlbumChange(albumId) {
      dispatch(changeAlbum(albumId));
      dispatch(galleryThunks.fetchAlbumPhotos(albumId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);