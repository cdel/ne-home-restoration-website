import {changeAlbum} from '_actions/actionCreators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GalleryPage from '_components/GalleryPage/GalleryPage';

// Get apps state and pass it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    activeAlbum: state.gallery.activeAlbum,
    albums: state.gallery.albums,
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