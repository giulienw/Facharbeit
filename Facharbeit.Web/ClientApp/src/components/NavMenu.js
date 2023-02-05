import React, { Component } from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    
    this.state = {
      currentPage: this.props.currentPage
    };
  }

  render() {
    return (
        <header className="pinning-header">
          <div className="pinning-header-container">
            <div href="/browse" className="main-header has-billboard menu-navigation">
              <a className="logo icon-logoUpdate active" aria-label="Meinflix" />
              <ul className="tabbed-primary-navigation" >
                <div className="navigation-tab"><a tag={Link} href="/browse" className={this.props.currentPage == "Startseite" ? "current active" : ""}>Startseite</a></div>
                <div className="navigation-tab"><a tag={Link} href="/browse/genre/0" className={this.props.currentPage == "Serien" ? "current active" : ""}>Serien</a></div>
                <div className="navigation-tab"><a tag={Link} href="/browse/genre/1" className={this.props.currentPage == "Filme" ? "current active" : ""}>Filme</a></div>
                {/*<div className="navigation-tab"><a tag={Link} href="/videos/new">Neu und beliebt</a></div>
                <div className="navigation-tab"><a tag={Link} href="/list">Meine Liste</a></div>
                <div className="navigation-tab"><a tag={Link} href="/">Nach Sprachen durchsuchen</a></div>*/}
              </ul>
              <div className="secondary-navigation">
                <div className="nav-element">
                  <div className="searchBox">
                    <button className="searchTab" tabIndex="0" aria-label="Suche" data-uia="search-box-launcher"
                            control-id="ControlID-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="search-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z"
                              fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="nav-element">
                  <span className="notifications"><button className="notifications-menu" aria-haspopup="true"
                                                          aria-expanded="false" aria-label="Benachrichtigungen"
                                                          control-id="ControlID-2"><svg width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        className="Hawkins-Icon Hawkins-Icon-Standard"><path
                      fill-rule="evenodd" clip-rule="evenodd"
                      d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                      fill="currentColor"></path></svg><span className="notification-pill">1</span></button></span>
                </div>
                <div className="nav-element">
                  <div className="account-menu-item">
                    <div className="account-dropdown-button">
                      <a href="/YourAccount" role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false" aria-label="Giulien – Konto und Einstellungen">
                        <span className="profile-link" role="presentation"><img className="profile-icon" src="http://occ-0-3211-3212.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7" alt="" /></span>
                        </a>
                      <span className="caret" role="presentation"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.currentPage == "Serien"  || "Filme" ? this.subHeader() : <div></div>}
        </header>
    );
  }
  
  subHeader() {
    return (
        <div className="sub-header">
          <div>
            <div className="sub-header-wrapper">
              <div className="aro-gallery-header">
                <div className="title"></div>
                <div className="aro-genre-details"><span className="genreTitle">{this.props.currentPage}</span>
                  <div className="subgenres">
                    <div className="ptrack-container">
                      <div className="ptrack-content"
                           data-ui-tracking-context="%7B%22appView%22:%22categorySelector%22,%22usePresentedEvent%22:true%7D"
                           data-tracking-uuid="5ed000e8-669e-46e9-9ff1-4abd8cb9d3c3">
                        <div label="Genres" cols="3" className="nfDropDown theme-lakira">
                          <div className="label" role="button" aria-haspopup="true" tabIndex="0" aria-expanded="false"
                               aria-labelledby="profileLanguageDropDown-header">Genres<span className="arrow"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="aro-toggle">
                    <button className="aro-row-toggle" aria-label="Listen-Ansicht" tabIndex="0"
                            control-id="ControlID-17">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           className="svg-icon svg-icon-rows">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z" fill="currentColor"></path>
                      </svg>
                    </button>
                    <div className="aro-grid">
                      <button aria-label="Raster-Ansicht" className="aro-grid-toggle" tabIndex="0"
                              control-id="ControlID-18">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="svg-icon svg-icon-grid">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z"
                                fill="currentColor"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
