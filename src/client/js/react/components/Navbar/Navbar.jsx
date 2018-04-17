import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import cx from '_utilities/classnames';
import './Navbar.scss';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.toggleMenu = () => {
      this.setState(currState => ({
        isExpanded: !currState.isExpanded
      }));
    }
  }
  render() {
    const props = this.props;
    return (
      <header className="Navbar">
        <div className="Navbar-banner">
          <p className="Navar-banner-message">
            Call Us Today At: <a className="Navbar-banner-tel" href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
            <span className="Navbar-banner-submessage">"Free no obligation consulations"</span>
          </p>
          <ul className="Navbar-banner-socialMedia">
            {props.mediaAccounts.map(account => (
              <li key={account.name} className="Navbar-banner-socialMedia-account">
                <a href={account.url} target="_blank" title={account.name}>{account.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('Navbar-header', {
            'Navbar-header--expanded': this.state.isExpanded
          })}>
          <figure className="Navbar-header-logo-wrapper">
            <img className="Navbar-header-logo-image" src="assets/logo/NEHomeRest_logo.png" alt="New England Home Restoration"/>
          </figure>
          <nav className="Navbar-header-navigation" onClick={this.toggleMenu}>
            <ul className="Navbar-header-navigation-menu">
              {props.pages.map(page => (
                <li key={page.name} className="Navbar-header-navigation-menu-item">
                  <Link to={page.url} className="Navbar-header-navigation-menu-link"><span className="Navbar-header-navigation-menu-text">{page.name}</span></Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavigationBar;