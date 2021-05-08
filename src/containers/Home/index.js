import React from 'react';
import { Link } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Header from '../../components/Header';
import LocationCard from '../../components/LocationCard';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import ResourcesCard from '../../components/ResourcesCard';
import HomeAllJobs from '../../components/HomeAllJobs';
import HomeGuideSec from '../../components/HomeGuideSec';
import Footer from '../../components/Footer';
import BottomNavBar from '../../components/BottomNavBar';
import BannerCarousel from '../../components/BannerCarousel';

//Styles
import './styles.scss';

function Home(props) {
  return (
    <div className='home-style'>
      {/* navigation bar */}
      <Header />

      <div className='home-page-style'>
        <BannerCarousel />
        {/* jobs-by-location */}
        <div className='jobs-by-location'>
          <Title title='Jobs by location' />
          <LocationCard />
        </div>

        {/* Resources section */}
        <div className='resources'>
          <div className='heading-see-all-button'>
            <Title title='Design Resources' />
            <Link to='/resources' className='see-all-button'>
              See all
            </Link>
          </div>

          <SubTitle subTitle='We have more than jobs on Match. Checkout below:' />

          <div className='resources-card'>
            <ResourcesCard />
          </div>
        </div>

        {/* all jobs heading section */}
        <div className='all-jobs-container'>
          <Title title='All Jobs' />

          {/* number of length */}
          <p className='sub-title job-length'>
            <span className='number-of-jobs'>
              {props.db.Sheet1.length}+ Design Jobs
            </span>{' '}
            available
          </p>

          {/* last updated */}
          <p className='sub-title'>
            Last updated on{' '}
            {props.db.Sheet1.map((data) => data.Timestamp).reverse()[0]}
          </p>
        </div>

        {/* jobs-section */}
        <div className='jobs-section'>
          <HomeAllJobs />
        </div>

        {/* guides-section */}
        <div className='guides-section'>
          <div className='heading-see-all-button'>
            <Title title='Guides' />
            <Link to='/guide-listing' className='see-all-button'>
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

export default withGoogleSheets('Sheet1')(Home);
