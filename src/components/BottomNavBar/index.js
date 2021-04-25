import { Link } from 'react-router-dom';

//Images
import home from '../../assets/home.svg';
import compass from '../../assets/compass.svg';
import companies from '../../assets/companies.svg';

//Styles
import './styles.scss';

function BottomNavBar() {
  return (
    <div className='bottom-nav-style'>
      {/* Icon Link*/}

      {/* Home Link */}
      <div className='icon-link'>
        <Link to='/'>
          <img src={home} className='nav-img' alt='nav-img' />
          <br />
          <span className='link-text'>Home</span>
        </Link>
      </div>

      {/* Companies Link */}
      <div className='icon-link'>
        <Link to='/'>
          <img src={companies} className='nav-img' alt='nav-img' />
          <br />
          <span className='link-text inactive'>Companies</span>
        </Link>
      </div>

      {/* Resources Link*/}
      <div className='icon-link '>
        <Link to='/'>
          <img src={compass} className='nav-img' alt='nav-img' />
          <br />
          <span className='link-text inactive'>Resources</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavBar;
