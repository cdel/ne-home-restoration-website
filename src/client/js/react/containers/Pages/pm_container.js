import {connect} from 'react-redux';
import PMPage from '_components/Pages/ProjectManagement';

function mapStateToProps(state, containerProps) {

  const faqPage = state.faq;

  return {
    title: faqPage.title,
    description: faqPage.description,
    faqs: faqPage.faqs
  };
}

export default connect(mapStateToProps)(PMPage);