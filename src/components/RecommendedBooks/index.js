import { useState } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import BookCard from '../BookCard';

//Images
import quotes from '../../assets/quotes.svg';

//Custom Component
import LoadMoreButton from '../LoadMoreButton';
import ReviewCard from '../ReviewCard';

//Styles
import './styles.scss';

function RecommededBooks(props) {
  const [visibleBooks, setVisibleBooks] = useState(2);

  const loadMore = (prev) => {
    setVisibleBooks(visibleBooks + 2);
  };

  return (
    <div className='home-all-job-style'>
      {props.db &&
        props.db.Mentors &&
        props.db.Mentors.filter((data) => data.Name === props.mentorName).map(
          (data, index) => (
            <div key={index}>
              {props.db &&
                props.db.Books &&
                props.db.Books.filter(
                  (item) =>
                    data.Book1 === item.Title ||
                    data.Book2 === item.Title ||
                    data.Book3 === item.Title ||
                    data.Book4 === item.Title ||
                    data.Book5 === item.Title ||
                    data.Book6 === item.Title
                ).map((item) => (
                  <div className='recommended-books'>
                    <BookCard
                      bookImage={item.Image}
                      title={item.Title}
                      glassdoorRatings={item.GlassdoorRatings}
                      author={item.Author}
                      numberofRatings={item.NumberofRatings}
                      description={item.Description}
                    />

                    <img src={quotes} className='quotes' />

                    <ReviewCard
                      name={data.Name}
                      src={data.Image}
                      review={
                        (data.Book1 === item.Title && data.Review1) ||
                        (data.Book2 === item.Title && data.Review2) ||
                        (data.Book3 === item.Title && data.Review3) ||
                        (data.Book4 === item.Title && data.Review4) ||
                        (data.Book5 === item.Title && data.Review5) ||
                        (data.Book6 === item.Title && data.Review6)
                      }
                    />
                  </div>
                ))}
            </div>
          )
        )}
      {/* <LoadMoreButton onClick={() => loadMore()} /> */}
    </div>
  );
}

export default withGoogleSheets(['Books', 'Mentors'])(RecommededBooks);
