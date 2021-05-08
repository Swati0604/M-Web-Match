import { Link } from 'react-router-dom';

//Images
import back from '../../assets/back.svg';

//Styles
import './styles.scss';

function BackNavigation(props) {
  return (
    <div className='back-navigation-style'>
      <Link to={props.href}>
        <img src={back} alt='back-navigation' className='back-navigation' />
      </Link>
      <div className='text-box'>
        <h4 className='page-name'>{props.pageName}</h4>
        <p className='page-type'>{props.pageType}</p>
      </div>
    </div>
  );
}

export default BackNavigation;
