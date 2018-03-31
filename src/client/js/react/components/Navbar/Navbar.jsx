import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './Navbar.scss';

const NavigationBar = (props) => {
  return (
    <div className="NavigationBar">
      <div className="NavigationBar-logo">
        <Image src="assets/react-icon.png" alt="React Boilerplate" responsive />
      </div>
      <Navbar>
        <Link to="/">
          Home
        </Link>
        <Link to="/gallery">
          Gallery
        </Link>
      </Navbar>
    </div>
  );
};

export default NavigationBar;