// Import each page
import Home from '_containers/Pages/home_container';
import About from '_components/Pages/About';
import Contact from '_components/Pages/Contact';
import Faq from '_containers/Pages/faq_container';
import Financing from '_components/Pages/Financing';
import Gallery from '_containers/GalleryPage/GalleryPage_container';
import PMPage from '_containers/Pages/pm_container';
import NotFound404 from '_components/Pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/faq',
    component: Faq
  },
  {
    path: '/financing',
    component: Financing,
  },
  {
    path: '/gallery',
    component: Gallery,
  },
  {
    path: '/project-management',
    component: PMPage,
  },
  {
    component: NotFound404
  }
];

export default routes;