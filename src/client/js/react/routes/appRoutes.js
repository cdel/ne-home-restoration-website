// Import each page
import Home from '_containers/Pages/home_container';
import About from '_containers/Pages/about_container';
import Contact from '_containers/Pages/contact_container';
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
    path: '/faq',
    component: Faq
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/project-management',
    component: PMPage,
  },
  {
    path: '/gallery',
    component: Gallery,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/financing',
    component: Financing,
  },
  {
    component: NotFound404
  }
];

export default routes;