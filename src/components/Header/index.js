import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='header-style'>
      {/* Top Header Logo and navbar-icon*/}
      <div className='top-header'>
        <Link to='/'>
          <img src={logo} className='logo' alt='logo' />
        </Link>
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
        <Link to='#' className='nav-link'>
          Post a Job
          <span className='coming-soon-status'>Coming Soon</span>
        </Link>

        {/* About DS Dropdown */}
        <button className='nav-link dropdown-btn' onClick={toggleAboutDropdown}>
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
          <Link to='/changelog' className='nav-link dropdown-link'>
            Changelog
          </Link>
          <Link to='/privacy-policy' className='nav-link dropdown-link'>
            Privacy Policy
          </Link>
          <Link to='#' className='nav-link dropdown-link'>
            Contact us
          </Link>
        </div>

        {/* Resources Dropdown */}
        <button
          className='nav-link dropdown-btn'
          onClick={toggleResourceDropdown}
        >
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
          <Link to='/guide-listing' className='nav-link dropdown-link'>
            Guides
          </Link>
          <Link to='/challenge-listing' className='nav-link dropdown-link'>
            Take Home Challenges
          </Link>
          <Link to='/books-listing' className='nav-link dropdown-link'>
            Curated Bookshelf
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
