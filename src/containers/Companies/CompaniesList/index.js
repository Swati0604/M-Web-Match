import React from 'react';
import { Link } from 'react-router-dom';

//Custom Component
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BottomNavBar from '../../../components/BottomNavBar';
import HomeGuideSec from '../../../components/HomeGuideSec';
import Title from '../../../components/Title';
import SubTitle from '../../../components/SubTitle';

//Styles
import './styles.scss';
import CompaniesCardSec from '../../../components/CompaniesCardSec';

function CompaniesList(props) {
  return (
    <div className='companies-listing-style'>
      {/* navigation bar */}
      <Header />

      <div className='companies-listing-container'>
        <div className='text-section'>
          <h4 className='heading'>All Companies</h4>
          <p className='sub-title'>
            Learn about companies and their jobs offers.
          </p>
        </div>

        <div className='companies-card-section'>
          <CompaniesCardSec />
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

      <BottomNavBar currentPage='Companies' />
    </div>
  );
}

export default CompaniesList;
