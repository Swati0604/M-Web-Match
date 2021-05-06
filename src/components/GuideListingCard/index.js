//Images
import jobType from '../../assets/job-type.svg';
import clock from '../../assets/clock.svg';

//Styles
import './styles.scss';

function GuideListingCard(props) {
  return (
    <div className='guide-listing-card'>
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
    </div>
  );
}

export default GuideListingCard;
