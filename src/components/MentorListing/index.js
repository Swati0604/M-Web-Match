import { useState } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';
import LoadMoreButton from '../LoadMoreButton';

//Custom Component
import MentorCard from '../MentorCard';

//Styles
import './styles.scss';

function MentorListing(props) {
  const [visibleMentor, setVisibleMentor] = useState(8);

  const loadMore = (prev) => {
    setVisibleMentor(visibleMentor + 8);
  };
  return (
    <div className='mentor-listing-style'>
      <div className='mentor-listing'>
        {props.db &&
          props.db.Mentors &&
          props.db.Mentors.slice(0, visibleMentor).map((data) => (
            <div className='mentor-card-container'>
              <MentorCard
                mentorImage={data.Image}
                //title={data.Title}
                name={data.Name}
                tagline={data.Tagline}
                mentorName={data.Name}
              />
            </div>
          ))}
      </div>
      <LoadMoreButton onClick={() => loadMore()} />
    </div>
  );
}

export default withGoogleSheets(['Mentors'])(MentorListing);
