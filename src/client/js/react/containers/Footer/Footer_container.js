import {connect} from 'react-redux';
import Footer from '_components/Footer/Footer';

const currentYear = (new Date()).getUTCFullYear();

function mapStateToProps(state, containerProps) {
  return {
    ownerName: state.about.owner.name,
    phoneNumber: state.contact.phoneNumber,
    mediaAccounts: state.mediaAccounts,
    email: state.contact.email,
    licenses: state.contact.licenses,
    businessHours: state.contact.businessHours,
    companyMission: state.about.company.background,
    currentYear
  };
}

export default connect(mapStateToProps)(Footer);