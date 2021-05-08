import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { withGoogleSheets } from 'react-db-google-sheets';

//Styles
import './styles.scss';

const options = {
  nav: true,
  dots: false,
  autoplay: false,
  loop: true,
  navText: [
    "<div className='nav-btn prev-slide'></div>",
    "<div className='nav-btn next-slide'></div>",
  ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 4,
    },
    400: {
      items: 4,
    },
    600: {
      items: 4,
    },
  },
};

function OtherChallenges(props) {
  return (
    <div className='other-challenge-card-style'>
      <OwlCarousel className='owl-theme' {...options}>
        {props.db &&
          props.db.Assignment &&
          props.db.Assignment.filter(
            (data) => data.Company != props.companyName
          ).map((data) => {
            return (
              <Link to={`/challenge-details/${data.Company}`} className=''>
                <div className='challenge-card'>
                  <img
                    src={data.Logo}
                    alt='challenge-image'
                    className='challenge-image'
                  />
                </div>
              </Link>
            );
          })}
      </OwlCarousel>
    </div>
  );
}

export default withGoogleSheets(['Assignment'])(OtherChallenges);
