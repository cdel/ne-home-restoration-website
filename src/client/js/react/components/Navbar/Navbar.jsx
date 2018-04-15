import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import './Navbar.scss';

const NavigationBar = (props) => {
  return (
    <header className="Navbar">
      <div className="Navbar-socialMedia">
        <ul>
          {props.mediaAccounts.map(account => (
            <li key={account.name} className="Navbar-socialMedia-account">
              <a href={account.url} target="_blank" title={account.name}>{account.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <figure className="Navbar-logo">
        <Image src="assets/logo/NEHomeRest_logo.png" alt="React Boilerplate" responsive />
      </figure>
      <nav>
        <ul>
          {props.pages.map(page => (
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