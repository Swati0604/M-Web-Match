import React from 'react';
import { Link } from 'react-router-dom';

//Custom Component
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BottomNavBar from '../../../components/BottomNavBar';
import HomeGuideSec from '../../../components/HomeGuideSec';
import ChallengeCardSec from '../../../components/ChallengeCardSec';
import Title from '../../../components/Title';
import SubTitle from '../../../components/SubTitle';

//Styles
import './styles.scss';

function ChallengeListing(props) {
  return (
    <div className='challenge-listing-style'>
      {/* navigation bar */}
      <Header />

      <div className='challenge-listing-container'>
        <div className='text-section'>
          <h4 className='heading'>Take Home Challenges</h4>
          <p className='sub-title'>Look for challenges by companies</p>
        </div>

        <div className='challenge-card-section'>
          <ChallengeCardSec />
        </div>

        <div className='guides-section'>
          <div className='heading-see-all-button'>
            <Title title='Guides' />
            <Link to='/' className='see-all-button'>
              See all
            </Link>
          </div>

          <SubTitle subTitle='Good reads to prepare for design jobs.' />

          <div className='guide-card'>
            <HomeGuideSec />
          </div>
        </div>

        <Footer />
      </div>

      <BottomNavBar />
    </div>
  );
}

export default ChallengeListing;
