import {connect} from 'react-redux';
import Navbar from '_components/Navbar/Navbar';

function mapStateToProps(state) {
  return {
    pages: state.pages,
    mediaAccounts: state.mediaAccounts
  };
}

export default connect(mapStateToProps)(Navbar);