import {connect} from 'react-redux';
import HomePage from '_components/Pages/Home';

function mapStateToProps(state, containerProps) {

  const faqPage = state.faq;

  return {
    photos: state.gallery.panoramic.photos.map(src => ({src, alt: "Remdoeling", })),
    about: state.about,
    stockPhotos: state.gallery.stockPhotos,
    reviews: state.about.reviews
  };
}

export default connect(mapStateToProps)(HomePage);