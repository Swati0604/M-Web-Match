import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import GuideCard from '../GuideCard';

//Styles
import './styles.scss';

const options = {
  nav: true,
  dots: false,
  autoplay: false,
  loop: true,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1.3,
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

function HomeGuideSec(props) {
  return (
    <div className='guide-sec-style'>
      <OwlCarousel className='owl-theme' {...options}>
        {props.db &&
          props.db.Guide &&
          props.db.Guide.map((data) => (
            <div className='guide-card-container'>
              <GuideCard
                guideTitle={data.Title}
                guideType='Job Application'
                time={data.Time}
                guideImg={data.Image}
              />
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
}

export default withGoogleSheets(['Guide'])(HomeGuideSec);
