import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import MediaAccounts from '_components/MediaAccounts/MediaAccounts';
import cx from '_utilities/classnames';
import './Navbar.scss';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      isStickying: false,
      height: null
    };
    this.toggleMenu = () => {
      this.setState(currState => ({
        isExpanded: !currState.isExpanded
      }));
    };
    this.getHeaderRef = ref => {
      this.headerRef = ref;
      this.setState({
        height: this.headerRef.clientHeight
      });
    };
    this.getHeaderContentRef = ref => {
      this.headerContentRef = ref;
    };
    this.getBannerRef = ref => {
      this.bannerRef = ref;
    };
    this.handleScroll = (e) => {
      const isStickying = window.scrollY >= this.headerRef.clientHeight;
      if (this.state.isStickying !== isStickying) {
        this.setState({
          isStickying
        });
      }
    };
    this.handleResize = (e) => {
      const height = this.headerContentRef.offsetHeight + this.bannerRef.offsetHeight;
      if (height !== this.state.height) {
        this.setState({
          height
        });
      }
    };
  }
  shouldComponentUpdate(nextState) {
    const didUpdate = Object.keys(nextState).some(state => {
      return nextState[state] !== this.state[state];
    });
    return didUpdate;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const props = this.props;
    const {isExpanded, height, isStickying} = this.state;
    const styles = {height};
    return (
      <header ref={this.getHeaderRef} className="Navbar" style={styles}>
        <div className="Navbar-banner" ref={this.getBannerRef}>
          <p className="Navbar-banner-message">
            Call Us Today At: <a className="Navbar-banner-tel" href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a>
            <span className="Navbar-banner-submessage">"Free no obligation consulations"</span>
          </p>
          <div className="Navbar-banner-mediaAccounts">
            <MediaAccounts accounts={props.mediaAccounts} />
          </div>
        </div>
        <div ref={this.getHeaderContentRef} className={cx('Navbar-header', {
            'Navbar-header--expanded': isExpanded,
            'Navbar-header--isStickying': isStickying
          })}>
          <figure className="Navbar-header-logo-wrapper">
            <img className="Navbar-header-logo-image" src="assets/logo/NEHomeRest_logo.png" alt="New England Home Restoration"/>
          </figure>
          <nav className="Navbar-header-navigation" onClick={this.toggleMenu}>
            <button className="Navbar-header-navigation-toggle">
              <span className={cx('Navbar-header-navigation-toggle-icon', {
                'glyphicon glyphicon-remove': isExpanded,
                'glyphicon glyphicon-align-justify': !isExpanded
              })}></span>
            </button>
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