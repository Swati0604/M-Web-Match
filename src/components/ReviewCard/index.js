//Styles
import './styles.scss';

function ReviewCard(props) {
  return (
    <div className='review-card-style'>
      <div className='review-card'>
        <div className='reviewer-info'>
          <img src={props.src} alt='review-image' className='review-image' />
          <p className='review-name'>{props.name}</p>
        </div>
        <p className='sub-title'>{props.review}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
