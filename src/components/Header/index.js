import { useState } from 'react';

//Images
import logo from '../../assets/Match-Logo.svg';
import arrowBottom from '../../assets/arrow-bottom.svg';
import arrowTop from '../../assets/arrow-top.svg';

//Styles
import './styles.scss';

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setResourceDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setOpenNav(!openNav);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleResourceDropdown = () => {
    setResourceDropdownOpen(!isResourceDropdownOpen);
  };
  return (
    <div className='header-style'>
      {/* Top Header Logo and navbar-icon*/}
      <div className='top-header'>
        <img src={logo} className='logo' alt='logo' />
        <div
          className={openNav ? 'toggle-wrap active' : 'toggle-wrap'}
          onClick={toggleNavbar}
        >
          <span className='toggle-bar'></span>
        </div>
      </div>
      <div
        id='mySidenav'
        className={openNav ? 'sidenav open-navbar' : 'sidenav close-navbar'}
      >
        {/* Post Job Link */}
        <a href='#' className='nav-link'>
          Post a Job
          <span className='coming-soon-status'>Coming Soon</span>
        </a>

        {/* About DS Dropdown */}
        <button class='nav-link dropdown-btn' onClick={toggleAboutDropdown}>
          About
          {isAboutDropdownOpen ? (
            <img src={arrowTop} className='logo' alt='logo' />
          ) : (
            <img src={arrowBottom} className='logo' alt='logo' />
          )}
        </button>
        <div
          className={
            isAboutDropdownOpen
              ? 'dropdown-container open-dropdown'
              : 'dropdown-container'
          }
        >
          <a href='#' className='nav-link dropdown-link'>
            Changelog
          </a>
          <a href='#' className='nav-link dropdown-link'>
            Privacy Policy
          </a>
          <a href='#' className='nav-link dropdown-link'>
            Contact us
          </a>
        </div>

        {/* Resources Dropdown */}
        <button class='nav-link dropdown-btn' onClick={toggleResourceDropdown}>
          Resources
          {isResourceDropdownOpen ? (
            <img src={arrowTop} className='logo' alt='logo' />
          ) : (
            <img src={arrowBottom} className='logo' alt='logo' />
          )}
        </button>
        <div
          className={
            isResourceDropdownOpen
              ? 'dropdown-container open-dropdown'
              : 'dropdown-container'
          }
        >
          <a href='#' className='nav-link dropdown-link'>
            Guides
          </a>
          <a href='#' className='nav-link dropdown-link'>
            Take Home Challenges
          </a>
          <a href='#' className='nav-link dropdown-link'>
            Curated Bookshelf
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
