import { Link } from 'react-router-dom';
//Images
import jobType from '../../assets/job-type.svg';
import clock from '../../assets/clock.svg';

//Styles
import './styles.scss';

function GuideListingCard(props) {
  return (
    <Link className='guide-listing-card' to={`/guide-details/${props.slug}`}>
      <div className='text-container'>
        <p className='title'>{props.title}</p>

        <div className='tag-container'>
          {props.tag && (
            <div className='tag'>
              <img src={jobType} className='img' alt='resource-img' />
              <p className='sub-title'>{props.tag}</p>
            </div>
          )}
          {props.time && (
            <div className='tag'>
              <img src={clock} className='img' alt='resource-img' />
              <p className='sub-title'>{props.time} Min read</p>
            </div>
          )}
        </div>
      </div>
      <div className='img-container'>
        <img src={props.url} className='img' alt='resource-img' />
      </div>
    </Link>
  );
}

export default GuideListingCard;
