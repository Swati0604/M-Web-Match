import React from 'react';
import { Link } from 'react-router-dom';

//Custom Component
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BottomNavBar from '../../../components/BottomNavBar';
import Title from '../../../components/Title';
import BookDetailCard from '../../../components/BookDetailCard';
import BooksCarousel from '../../../components/BooksCarousel';

//Styles
import './styles.scss';

function BooksListing(props) {
  return (
    <div className='books-listing-style'>
      {/* navigation bar */}
      <Header />

      <div className='books-listing-container'>
        <div className='text-section'>
          <h4 className='heading'>Top 100 Books suggested by designers</h4>
          <p className='sub-title'>
            From the best designers, and design leaders you look up to.
          </p>
        </div>

        <div className='books-card-section'>
          <BookDetailCard />
        </div>

        <div className='books-carousel-container'>
          <div className='heading-see-all-button'>
            <div className='text-section'>
              <Title title='Suggestions by other designers' />
            </div>
            <Link className='see-all-button'>See all</Link>
          </div>

          <BooksCarousel />
        </div>

        <Footer />
      </div>

      <BottomNavBar />
    </div>
  );
}

export default BooksListing;
