import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactStars from 'react-rating-stars-component';
import { withGoogleSheets } from 'react-db-google-sheets';

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

function BooksCarousel(props) {
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 12) + '...' : str;
  };

  const truncateAuthorName = (str) => {
    return str.length > 20 ? str.substring(0, 14) + '...' : str;
  };
  return (
    <div className='books-carousel-style'>
      <OwlCarousel className='owl-theme' {...options}>
        {props.db &&
          props.db.Books &&
          props.db.Books.map((data) => (
            <div className='book-card-container'>
              <div className='book-card'>
                <Link>
                  <img
                    src={data.Image}
                    alt='book-image'
                    className='book-image'
                  />
                </Link>
                <p className='book-name'>{truncate(data.Title)}</p>
                <p className='sub-title'>
                  by: {truncateAuthorName(data.Author)}
                </p>
                <ReactStars value={data.GlassdoorRatings} size={18} />
              </div>
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
}

export default withGoogleSheets(['Books'])(BooksCarousel);
