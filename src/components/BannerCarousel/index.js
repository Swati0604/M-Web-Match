import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { withGoogleSheets } from 'react-db-google-sheets';

//Styles
import './styles.scss';

const options = {
  nav: true,
  dots: true,
  autoplay: false,
  loop: true,
  navText: [
    "<div className='nav-btn prev-slide'></div>",
    "<div className='nav-btn next-slide'></div>",
  ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1.1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

function BannerCarousel(props) {
  return (
    <div className='banner-card-style'>
      <OwlCarousel className='owl-theme' {...options}>
        {props.db &&
          props.db.Dyanmic &&
          props.db.Dyanmic.map((data, index) => (
            <div className='banner-card-container' key={index}>
              <div className='banner-card'>
                <Link to='/'>
                  <img
                    src={data.Image}
                    alt='banner-image'
                    className='banner-image'
                  />
                </Link>
              </div>
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
}

export default withGoogleSheets(['Dyanmic'])(BannerCarousel);
