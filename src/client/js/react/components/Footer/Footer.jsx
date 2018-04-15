import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = props => {
  return (
    <footer className="Footer">
      <div className="Footer-contactUs">
        <h3>Contact Us</h3>
        <p>{props.ownerName}</p>
        <ul>
          <li><span>Hours: </span>{props.businessHours}</li>
          <li><span>Email: </span><a href={`emailto:${props.email}`}>{props.email}</a></li>
          <li><span>Phone: </span><a href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a></li>
        </ul>
        <div>
          {props.mediaAccounts.map(account => (
              <a key={account.name} href={account.url} target="_blank" title={account.name}>{account.name}</a>
          ))}  
        </div>
      </div>
      <div className="Footer-aboutUs">
        <h3 className="Footer-title">About Us</h3>
        <span>Our Mission: </span>
        <p>{props.companyMission}</p>
      </div>
      <div className="Footer-navigate">
        <h3 className="Footer-title">Navigate</h3>
        <ul className="Footer-navigation">
          {props.pages.map(page => (
            <li key={page.name}>
              <Link to={page.url}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="Footer-attribution">
        <p className="Footer-attribution">
          Copyright © {props.currentYear}. New England Home Restoration. All Rights Reserved
        </p>
        <ul>
          {props.licenses.map(license => (
            <li key={license.licenseId}>
              <span>{license.name}</span>
              <span>{license.licenseId}</span>
            </li>
          ))}  
        </ul>
      </div>
    </footer>
  );
}

export default Footer;