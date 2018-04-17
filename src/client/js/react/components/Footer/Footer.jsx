import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import './footer.scss';

const Footer = props => {
  /*
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
  */
  
  return (
  <footer className="Footer page-footer font-small blue-grey lighten-5 pt-0">
    <div className="Footer-socialMediaBar">
      <Grid> 
        <Row>
          <Col xs={12} md={5}>
            <h6 className="mb-0 white-text text-center text-md-left">
                <strong>Get connected with us on social networks!</strong>
            </h6>
          </Col>
          <Col xs={12} md={7}>
            <a className="fb-ic ml-0">
              <i className="fa fa-facebook white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
              <i className="fa fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
              <i className="fa fa-google-plus white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
              <i className="fa fa-linkedin white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
              <i className="fa fa-instagram white-text mr-lg-4"> </i>
            </a>
          </Col>
        </Row>
      </Grid>
    </div>
    <div className="Footer-content">
      <Grid> 
        <Row>
          <Col md={3} lg={4} xl={3}>
            <h6 className="Footer-content-title">
              <span className="Footer-content-title-text">
                Company name
              </span>
            </h6>
            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </Col>
          <Col md={2} lg={2} xl={2}>
            <h6 className="Footer-content-title">
              <span className="Footer-content-title-text">
                Products
              </span>
            </h6>
            <p>
              <a href="#!" className="dark-grey-text">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">Bootstrap Angular</a>
            </p>
          </Col>
          <Col md={4} lg={3} xl={3}>
            <h6 className="Footer-content-title">
              <span className="Footer-content-title-text">
                Contanct
              </span>
            </h6>
            <p>
              <i className="fa fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3"></i> + 01 234 567 89
            </p>
          </Col>      
        </Row>
      </Grid>
    </div>
    <div className="Footer-attribution">
      <Grid>
        <Col xs={12}>
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/material-design-for-bootstrap/">
          <strong> MDBootstrap.com</strong>
          </a>
        </Col>
      </Grid>
    </div>
  </footer>
  );
}

export default Footer;