//Custom Component
import BackNavigation from '../BackNavigation';

//Images
import link from '../../assets/link.svg';

//Styles
import './styles.scss';

function DetailsHeader(props) {
  return (
    <div
      className='details-header-style'
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <BackNavigation
        pageName={props.companyName}
        pageType={props.pageName}
        href={props.href}
      />
      <div className='bottom-section'>
        <div
          className='company-img'
          style={{ backgroundColor: `${props.bgColor}` }}
        >
          <img src={props.imgSrc} className='img' />
        </div>
        {props.copyLinkButton && (
          <div className='copy-button-cont'>
            <button className='copy-link-button'>
              <img src={link} alt='link' className='link-img' />
              Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsHeader;
