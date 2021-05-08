import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';
import ReactStars from 'react-rating-stars-component';

//Custom Component
import Footer from '../../../components/Footer';
import BackNavigation from '../../../components/BackNavigation';
import Title from '../../../components/Title';
import BooksCarousel from '../../../components/BooksCarousel';

//Styles
import './styles.scss';
import ReviewCard from '../../../components/ReviewCard';
import LoadMoreButton from '../../../components/LoadMoreButton';

function BookDetails(props) {
  const bookName = props.match.params.bookName;
  const [visibleReview, setVisibleReview] = useState(4);

  const loadMore = () => {
    setVisibleReview(visibleReview + 2);
  };

  return (
    <div className='book-detail-style'>
      <BackNavigation
        pageName={bookName}
        pageType='Books'
        href='/books-listing'
      />

      {props.db &&
        props.db.Books &&
        props.db.Books.filter((data) => data.Title === bookName.toString()).map(
          (data) => {
            const filterReview = props.db.Mentors.filter(
              (item) =>
                (item.Book1 === data.Title && item.Review1) ||
                (item.Book2 === data.Title && item.Review2) ||
                (item.Book3 === data.Title && item.Review3) ||
                (item.Book4 === data.Title && item.Review4) ||
                (item.Book5 === data.Title && item.Review5) ||
                (item.Book6 === data.Title && item.Review6)
            );

            return (
              <div>
                <div className='book-detail-banner'>
                  <img src={data.Image} className='book-detail' />
                </div>
                <div className='book-detail-content'>
                  <div className='text-box'>
                    <h4 className='heading'>{data.Title}</h4>

                    <p className='author-name'>by: {data.Author}</p>

                    <div className='rating-sec'>
                      <p className='sub-title'>Goodreads Rating</p>
                      <ReactStars value={data.GlassdoorRatings} size={18} />
                      <p className='sub-title'>
                        {data.GlassdoorRatings}({data.NumberofRatings})
                      </p>
                    </div>

                    <p className='sub-title'>{data.Description}</p>
                  </div>
                </div>

                <div className='review-section'>
                  <p className='title'>
                    {filterReview.length}+ Recommendations
                  </p>
                  {props.db &&
                    props.db.Mentors &&
                    filterReview.slice(0, visibleReview).map((item) => (
                      <div>
                        <ReviewCard
                          name={item.Name}
                          src={item.Image}
                          review={
                            (item.Book1 === data.Title && item.Review1) ||
                            (item.Book2 === data.Title && item.Review2) ||
                            (item.Book3 === data.Title && item.Review3) ||
                            (item.Book4 === data.Title && item.Review4) ||
                            (item.Book5 === data.Title && item.Review5) ||
                            (item.Book6 === data.Title && item.Review6)
                          }
                        />
                      </div>
                    ))}

                  {filterReview.length > visibleReview &&
                    props.db.Guide.length >= 4 && (
                      <div className='load-btn-cont'>
                        <LoadMoreButton
                          buttonText='Load More Reviews'
                          onClick={() => loadMore()}
                        />
                      </div>
                    )}
                </div>
              </div>
            );
          }
        )}

      <div className='books-carousel-container'>
        <div className='heading-see-all-button'>
          <div className='text-section'>
            <Title title='Other most recommended books' />
          </div>
          <Link className='see-all-button'>See all</Link>
        </div>

        <BooksCarousel />
      </div>

      <Footer />
    </div>
  );
}

export default withGoogleSheets(['Books', 'Mentors'])(BookDetails);
