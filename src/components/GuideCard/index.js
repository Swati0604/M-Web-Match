import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Images
import clockIcon from '../../assets/clock.svg';
import jobTypeIcon from '../../assets/job-type.svg';

//Styles
import './styles.scss';

function GuideCard(props) {
  return (
    <div className='guide-card-style'>
      <div className='guide-card'>
        <img src={props.guideImg} alt='guide-image' className='guide-image' />
        <p className='about author'>{props.author}</p>
        <p className='guide-name'>{props.guideTitle}</p>

        <div className='guide-card-bottom-section'>
          {/* job type */}
          {props.guideType && (
            <div className='icons-text'>
              <img alt='icons' className='icons' src={jobTypeIcon} />
              <p className='sub-title'>{props.guideType}</p>
            </div>
          )}

          {/* job location */}
          {props.time && (
            <div className='icons-text'>
              <img alt='icons' className='icons' src={clockIcon} />
              <p className='sub-title'>{props.time} Min read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
