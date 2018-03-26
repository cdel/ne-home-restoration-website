import {addTodo} from '_actions/actionCreators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GalleryPage from '_components/GalleryPage/GalleryPage';

// Get apps state and pass it as props to UserList
// Whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return state.gallery;
}

export default connect(mapStateToProps)(GalleryPage);