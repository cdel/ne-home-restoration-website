// Import each page
import Home from '_components/Pages/Home';
import About from '_components/Pages/About';
import Contact from '_components/Pages/Contact';
import Faq from '_components/Pages/Faq';
import Financing from '_components/Pages/Financing';
import Gallery from '_components/Pages/Gallery';
import PMPage from '_components/Pages/ProjectManagement';
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