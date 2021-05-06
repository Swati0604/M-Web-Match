import React from 'react';
import { Link } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import books from '../../../assets/books.svg';
import Footer from '../../../components/Footer';
import BackNavigation from '../../../components/BackNavigation';
import MentorListing from '../../../components/MentorListing';
import Title from '../../../components/Title';
import BooksCarousel from '../../../components/BooksCarousel';

//Styles
import './styles.scss';

function GuideDetails(props) {
  return (
    <div className='guide-details-style'>
      <BackNavigation pageName='Books' pageType='Resources' />

      <div className='designer-listing-banner'>
        <img src={books} className='designer-listing' />
      </div>

      <div className='designer-listing-content'>
        <div className='text-box'>
          <h4 className='heading'>Curated Bookshelf for Designers</h4>
          <p className='sub-title'>
            From the best designers, and design leaders you look up to.
          </p>
        </div>

        <div className='mentor-list'>
          <Title title='Books recommended by' />
          <MentorListing />
        </div>

        <div className='books-carousel-container'>
          <div className='heading-see-all-button'>
            <div className='text-section'>
              <Title title='Most recommended books' />
            </div>
            <Link className='see-all-button'>See all</Link>
          </div>

          <BooksCarousel />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default withGoogleSheets('Sheet1')(GuideDetails);
