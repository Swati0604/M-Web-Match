import { useState } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import BookCard from '../BookCard';

//Custom Component
import LoadMoreButton from '../LoadMoreButton';

//Styles
import './styles.scss';

function BookDetailCard(props) {
  const [visibleBooks, setVisibleBooks] = useState(4);

  const loadMore = (prev) => {
    setVisibleBooks(visibleBooks + 4);
  };

  return (
    <div className='books-detail-style'>
      {props.db &&
        props.db.Books &&
        props.db.Books.slice(0, visibleBooks).map((data, index) => (
          <div key={index} className='book-details'>
            <div className='recommended-books'>
              <BookCard
                bookImage={data.Image}
                title={data.Title}
                glassdoorRatings={data.GlassdoorRatings}
                author={data.Author}
                numberofRatings={data.NumberofRatings}
                description={data.Description}
                bookName={data.Title}
              />
            </div>
            {props.db.Mentors.filter(
              (item) =>
                item.Book1 === data.Title ||
                item.Book2 === data.Title ||
                item.Book3 === data.Title ||
                item.Book4 === data.Title ||
                item.Book5 === data.Title ||
                item.Book6 === data.Title
            ).length > 0 && (
              <p className='recommendation-no'>
                {
                  props.db.Mentors.filter(
                    (item) =>
                      item.Book1 === data.Title ||
                      item.Book2 === data.Title ||
                      item.Book3 === data.Title ||
                      item.Book4 === data.Title ||
                      item.Book5 === data.Title ||
                      item.Book6 === data.Title
                  ).length
                }
                + Designers have recommended this book
              </p>
            )}

            {visibleBooks > index + 1 && (
              <div className='horizontal-line'></div>
            )}
          </div>
        ))}

      <div className='button-cont'>
        <LoadMoreButton
          onClick={() => loadMore()}
          buttonText='Load More Books'
        />
      </div>
    </div>
  );
}

export default withGoogleSheets(['Books', 'Mentors'])(BookDetailCard);
