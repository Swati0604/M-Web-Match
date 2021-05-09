import { Link } from 'react-router-dom';

//Images
import homeActive from '../../assets/home.svg';
import compass from '../../assets/compass.svg';
import companies from '../../assets/companies.svg';
import compassActive from '../../assets/compass-active.svg';
import companiesActive from '../../assets/companies-active.svg';
import home from '../../assets/home-inactive.svg';

//Styles
import './styles.scss';

function BottomNavBar(props) {
  return (
    <div className='bottom-nav-style'>
      {/* Icon Link*/}

      {/* Home Link */}
      <div className='icon-link'>
        <Link to='/'>
          {props.currentPage === 'Home' ? (
            <img src={homeActive} className='nav-img' alt='nav-img' />
          ) : (
            <img src={home} className='nav-img' alt='nav-img' />
          )}
          <br />
          <span
            className={
              props.currentPage === 'Home' ? 'link-text' : 'link-text inactive'
            }
          >
            Home
          </span>
        </Link>
      </div>

      {/* Companies Link */}

      <div className='icon-link'>
        <Link to='/companies-list'>
          {props.currentPage === 'Companies' ? (
            <img src={companiesActive} className='nav-img' alt='nav-img' />
          ) : (
            <img src={companies} className='nav-img' alt='nav-img' />
          )}
          <br />
          <span
            className={
              props.currentPage === 'Companies'
                ? 'link-text'
                : 'link-text inactive'
            }
          >
            Companies
          </span>
        </Link>
      </div>

      {/* Resources Link*/}
      <div className='icon-link'>
        <Link to='/resources'>
          {props.currentPage === 'Resources' ? (
            <img src={compassActive} className='nav-img' alt='nav-img' />
          ) : (
            <img src={compass} className='nav-img' alt='nav-img' />
          )}
          <br />
          <span
            className={
              props.currentPage === 'Resources'
                ? 'link-text'
                : 'link-text inactive'
            }
          >
            Resources
          </span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavBar;
