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
import OtherChallenges from '../../../components/OtherChallenges';

//Styles
import './styles.scss';
import GuideListingSec from '../../../components/GuideListingSec';

function GuideListing(props) {
  return (
    <div className='guide-listing-style'>
      {/* navigation bar */}
      <Header />

      <div className='guide-listing-container'>
        <div className='text-section'>
          <h4 className='heading'>Guides</h4>
          <p className='sub-title'>Good reads to prepare for design jobs.</p>
        </div>

        <div className='guide-card-section'>
          <GuideListingSec />
        </div>

        <div className='other-challenge-listing'>
          <div className='challenge-section'>
            <div className='heading-see-all-button'>
              <Title title='Challenges' />
              <Link to='/challenge-listing' className='see-all-button'>
                See all
              </Link>
            </div>

            <SubTitle subTitle='Prepare by doing a mock assignment.' />

            <div className='guide-card'>
              <OtherChallenges />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}

export default GuideListing;
