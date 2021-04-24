//Styles
import './styles.scss';

function MentorCard(props) {
  return (
    <div className='mentor-card-style'>
      <a
        className='mentor-pic'
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 72.64%, #000000 100%), url(' +
            `${props.mentorImage}` +
            ')',
          backgroundRepeat: 'no-repeat',
        }}
        href={`/mentor-profile/${props.mentorName}`}
      >
        <div className='mentor-details'>
          <p className='mentor-name'>{props.name}</p>
          <p className='mentor-title'>{props.title}</p>
        </div>
      </a>
    </div>
  );
}

export default MentorCard;
