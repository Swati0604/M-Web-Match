import { useState } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import BookCard from '../BookCard';

//Custom Component
import LoadMoreButton from '../LoadMoreButton';

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
        props.db.Mentors.filter((data) => data.Name === props.mentorName)
        .map((data) => (
          <div>
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
                </div>
              ))}
          </div>
        ))}
      {/* <LoadMoreButton onClick={() => loadMore()} /> */}
    </div>
  );
}

export default withGoogleSheets(['Books', 'Mentors'])(RecommededBooks);
