import React from 'react';
import { Link } from 'react-router-dom';

//Custom Component
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BottomNavBar from '../../components/BottomNavBar';
import HomeGuideSec from '../../components/HomeGuideSec';
import ChallengeCardSec from '../../components/ChallengeCardSec';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';

//Images
import guide from '../../assets/guide.svg';
import challenge from '../../assets/challenge.svg';
import stories from '../../assets/stories.svg';
import interviewQuestion from '../../assets/interview-question.svg';

//Styles
import './styles.scss';

const resources = [
  {
    url: challenge,
    slug: '/challenge-listing',
    title: 'Challenges',
    subTitle: 'Get quick tips hixhc chksc ksdhkdjch ksdchksdckds',
  },
  {
    url: guide,
    slug: '/guide-listing',
    title: 'Guides',
    subTitle: 'Get quick tips hixhc chksc ksdhkdjch ksdchksdckds',
  },
  {
    url: stories,
    title: 'Stories',
    subTitle: 'Get quick tips hixhc chksc ksdhkdjch ksdchksdckds',
  },
  {
    url: interviewQuestion,
    title: 'Interview Questions',
    subTitle: 'Get quick tips hixhc chksc ksdhkdjch ksdchksdckds',
  },
  {
    url: challenge,
    title: 'Books',
    subTitle: 'Get quick tips hixhc chksc ksdhkdjch ksdchksdckds',
  },
];

function Resources(props) {
  return (
    <div className='resource-listing-style'>
      {/* navigation bar */}
      <Header />

      <div className='resource-listing-container'>
        <div className='text-section'>
          <h4 className='heading'>Design Resources</h4>
          <p className='sub-title'>
            A few resources to help you ace your next opportunity.
          </p>
        </div>

        <div className='resources-card-container'>
          {resources &&
            resources.map((data) => {
              return (
                <a className='resources-card' href={data.slug}>
                  <div className='img-container'>
                    <img src={data.url} className='img' alt='resource-img' />
                  </div>
                  <div className='text-container'>
                    <p className='title'>{data.title}</p>
                    <p className='sub-title'>{data.subTitle}</p>
                  </div>
                </a>
              );
            })}
        </div>

        <Footer />
      </div>

      <BottomNavBar />
    </div>
  );
}

export default Resources;
