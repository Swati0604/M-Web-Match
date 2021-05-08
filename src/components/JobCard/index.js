import { Link } from 'react-router-dom';

//Images
import experienceIcon from '../../assets/experience-icon.svg';
import locationIcon from '../../assets/location.svg';
import jobTypeIcon from '../../assets/job-type.svg';

//Styles
import './styles.scss';
import { propTypes } from 'react-bootstrap/esm/Image';

function JobCard(props) {
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 10) + '...' : str;
  };
  return (
    <div className='job-card-style'>
      <Link to={props.href}>
        {/* top section */}
        <div className='job-card-top-section'>
          {/* company logo */}
          <div className='img-card'>
            <img
              src={props.companyLogo}
              alt='company-image'
              className='company-logo'
            />
          </div>

          {/* position and company name */}
          <div className='company-job-details'>
            <p className='title position'>{props.position}</p>
            <p className='sub-title company'>{props.company}</p>

            {/* tag to define company */}
            <div className='tag-container'>
              {props.tag1 && <p className='tag'>{truncate(props.tag1)}</p>}
              {props.tag2 && <p className='tag'>{truncate(props.tag2)}</p>}
              {props.tag3 && <p className='tag'>{truncate(props.tag3)}</p>}
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className='job-card-bottom-section'>
          {/* job type */}
          {props.jobType && (
            <div className='icons-text'>
              <img alt='icons' className='icons' src={jobTypeIcon} />
              <p className='sub-title'>{truncate(props.jobType)}</p>
            </div>
          )}

          {/* job location */}
          {props.location && (
            <div className='icons-text'>
              <img alt='icons' className='icons' src={locationIcon} />
              <p className='sub-title'>{truncate(props.location)}</p>
            </div>
          )}

          {/* experience required */}
          {props.experience && (
            <div className='icons-text'>
              <img alt='icons' className='icons' src={experienceIcon} />
              <p className='sub-title'>{props.experience}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default JobCard;
