import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Images
import clockIcon from '../../assets/clock.svg';
import jobTypeIcon from '../../assets/job-type.svg';

//Styles
import './styles.scss';

function ChangelogCard(props) {
  return (
    <div className='changelog-card-style'>
      <p className='title'>{props.title}</p>
      <p className='guide-name'>{props.guideTitle}</p>

      <div className='feature-time-type'>
        <div
          className='feature-type-container'
          style={{ backgroundColor: `${props.typeBgColor}` }}
        >
          <p className='feature-type'>{props.type}</p>
        </div>
        <p className='sub-title'>{props.time}</p>
      </div>

      <div className='description'>
        <pre className='sub-title'>{props.description}</pre>
      </div>

      <div className='card-bottom-section'>
        <div className='img-container'>
          <img alt='icons' className='img' src={props.Image} />
        </div>
        <div className='text-section'>
          <p className='name'>{props.updater}</p>
          <p className='sub-title'>{props.position}</p>
        </div>
      </div>
    </div>
  );
}

export default ChangelogCard;
