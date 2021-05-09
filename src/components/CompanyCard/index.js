import { Link } from 'react-router-dom';

//Images
import locationIcon from '../../assets/location.svg';
import flag from '../../assets/flag.svg';

//Styles
import './styles.scss';
import { propTypes } from 'react-bootstrap/esm/Image';

function CompanyCard(props) {
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 27) + '...' : str;
  };

  const truncateTag = (str) => {
    return str.length > 10 ? str.substring(0, 8) + '...' : str;
  };
  return (
    <div className='company-card-style'>
      <Link to={`/company-detail/${props.companyName}`}>
        {/* top section */}
        <div className='company-card-top-section'>
          {/* company logo */}
          <div className='img-card'>
            <img
              src={props.companyLogo}
              alt='company-image'
              className='company-logo'
            />
          </div>

          {/* position and company name */}
          <div className='company-company-details'>
            <p className='title company'>{props.company}</p>

            {props.location && (
              <div className='icons-text'>
                <img alt='icons' className='icons' src={locationIcon} />
                <p className='sub-title'>{truncate(props.location)}</p>
              </div>
            )}

            {props.age && (
              <div className='icons-text'>
                <img alt='icons' className='icons' src={flag} />
                <p className='sub-title'>{props.age}</p>
              </div>
            )}

            {/* tag to define company */}
            <div className='tag-container'>
              {props.tag1 && <p className='tag'>{truncateTag(props.tag1)}</p>}
              {props.tag2 && <p className='tag'>{truncateTag(props.tag2)}</p>}
              {props.tag3 && <p className='tag'>{truncateTag(props.tag3)}</p>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;
