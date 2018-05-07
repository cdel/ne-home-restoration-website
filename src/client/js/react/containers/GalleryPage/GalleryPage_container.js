import {changeAlbum} from '_actions/gallery/gallery_actions';
import galleryThunks from '_thunks/gallery/gallery_thunks';
import {connect} from 'react-redux';
import GalleryPage from '_components/GalleryPage/GalleryPage';

// Get apps state and pass it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    slideshow: {
      album: state.gallery.albums.find(album => album.albumId === state.gallery.slideshow.albumId)
    },
    albums: state.gallery.albums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAlbumChange(albumId) {
      dispatch(changeAlbum(albumId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);