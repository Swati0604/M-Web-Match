import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

//Styles
import './styles.scss';

function BookCard(props) {
  const truncate = (str) => {
    return str.length > 20 ? str.substring(0, 18) + '...' : str;
  };

  const truncateAuthorName = (str) => {
    return str.length > 20 ? str.substring(0, 14) + '...' : str;
  };
  return (
    <div className='book-card-style'>
      <div className='card-top-section'>
        <img src={props.bookImage} alt='bookImage' className='book-image' />

        <div className='book-detail-container'>
          <p className='book-name'>{truncate(props.title)}</p>
          {props.author && (
            <p className='sub-title'>by: {truncateAuthorName(props.author)}</p>
          )}
          <ReactStars value={props.glassdoorRatings} size={18} />
          <p className='sub-title glassdoor-rating'>
            {props.glassdoorRatings}({props.numberofRatings} Ratings)
          </p>
          <Link
            to={`/books-detail/${props.bookName}`}
            className='outline-button'
          >
            Learn More
          </Link>
          <Link
            to={`/books-detail/${props.mentorName}`}
            className='solid-button'
          >
            Buy Now
          </Link>
        </div>
      </div>
      <div className='card-bottom-section'>
        <p className='sub-title'>{props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
