import { pages } from '_constants/app_constants';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import './Navbar.scss';

const NavigationBar = (props) => {
  return (
    <header className="NavigationBar">
      <figure className="NavigationBar-logo">
        <Image src="assets/logo/NEHomeRest_logo.png" alt="React Boilerplate" responsive />
      </figure>
      <nav>
        <ul>
          {pages.map(page => (
            <li key={page.name}>
              <Link to={page.url}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;