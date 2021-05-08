import { withGoogleSheets } from 'react-db-google-sheets';
import { Link } from 'react-router-dom';

//Styles
import './styles.scss';

function ChallengeCardSec(props) {
  return (
    <div className='challenge-card-style'>
      <div className='row'>
        {props.db &&
          props.db.Assignment &&
          props.db.Assignment.map((data, index) => {
            return (
              <div className='col-6' key={index}>
                <Link to={`/challenge-details/${data.Company}`}>
                  <div className='challenge-card'>
                    <img
                      src={data.Logo}
                      alt='challenge-image'
                      className='challenge-image'
                    />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default withGoogleSheets(['Assignment'])(ChallengeCardSec);
