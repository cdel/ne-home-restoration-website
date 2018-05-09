import {connect} from 'react-redux';
import HomePage from '_components/Pages/Home';

function mapStateToProps(state, containerProps) {

  const faqPage = state.faq;

  return {
    about: state.about,
    reviews: state.about.reviews
  };
}

export default connect(mapStateToProps)(HomePage);