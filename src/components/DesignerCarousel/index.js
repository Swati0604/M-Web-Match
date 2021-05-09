import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactStars from 'react-rating-stars-component';
import { withGoogleSheets } from 'react-db-google-sheets';

//Styles
import './styles.scss';
import MentorCard from '../MentorCard';

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
      items: 2.2,
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

function DesignerCarousel(props) {
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 12) + '...' : str;
  };

  const truncateAuthorName = (str) => {
    return str.length > 20 ? str.substring(0, 14) + '...' : str;
  };
  return (
    <div className='mentor-carousel-style'>
      <OwlCarousel className='owl-theme' {...options}>
        {props.db &&
          props.db.Mentors &&
          props.db.Mentors.filter((data) => data.Name != props.mentorName).map(
            (data, index) => (
              <div className='mentor-card-container'>
                <MentorCard
                  mentorImage={data.Image}
                  // title={data.Title}
                  name={data.Name}
                  tagline={data.Tagline}
                  mentorName={data.Name}
                />
              </div>
            )
          )}
      </OwlCarousel>
    </div>
  );
}

export default withGoogleSheets(['Mentors'])(DesignerCarousel);
