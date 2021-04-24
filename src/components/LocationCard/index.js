//Images
import delhi from '../../assets/delhi.svg';
import bangalore from '../../assets/bangalore.svg';
import hyderabad from '../../assets/hyderabad.svg';
import mumbai from '../../assets/mumbai.svg';

//Styles
import './styles.scss';

const location = [
  {
    src: delhi,
    city: 'Delhi NCR',
  },
  {
    src: mumbai,
    city: 'Mumbai',
  },
  {
    src: bangalore,
    city: 'Bangalore',
  },
  {
    src: hyderabad,
    city: 'Hyderabad',
  },
];

function LocationCard() {
  return (
    <div className='location-card-style'>
      {location &&
        location.map((data) => (
          <div className='city-card-style'>
            <div className='city-card'>
              <img src={data.src} alt='city-image' className='city-image' />
              <p className='city-name'>{data.city}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default LocationCard;
