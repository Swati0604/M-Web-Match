import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Images
import guide from '../../assets/guide.svg';
import bangalore from '../../assets/bangalore.svg';
import hyderabad from '../../assets/hyderabad.svg';
import mumbai from '../../assets/mumbai.svg';

//Styles
import './styles.scss';

const resources = [
  {
    src: guide,
    resources: 'Guides',
    about: 'Practice before you apply',
  },
  {
    src: mumbai,
    resources: 'Challenges',
    about: 'Practice before you apply',
  },
  {
    src: guide,
    resources: 'Guides',
    about: 'Practice before you apply',
  },
  {
    src: hyderabad,
    resources: 'Hyderabad',
    about: 'Practice before you apply',
  },
];

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
      items: 2.3,
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

function ResourcesCard() {
  return (
    <div className='resources-card-style'>
      <OwlCarousel className='owl-theme' {...options}>
        {resources &&
          resources.map((data, index) => (
            <div className='resource-card-container' key={index}>
              <div className='resources-card'>
                <img
                  src={data.src}
                  alt='resources-image'
                  className='resources-image'
                />
                <p className='resources-name'>{data.resources}</p>
                <p className='about-resources'>{data.about}</p>
              </div>
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
}

export default ResourcesCard;
