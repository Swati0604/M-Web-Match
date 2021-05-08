import React from 'react';

//Custom Component
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//Images
import guide from '../../assets/guide.svg';
import challenge from '../../assets/challenge.svg';
import stories from '../../assets/stories.svg';
import interviewQuestion from '../../assets/interview-question.svg';

//Styles
import './styles.scss';
import ChangelogSec from '../../components/ChangelogSec';

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

function Changelog(props) {
  return (
    <div className='changelog-listing-style'>
      {/* navigation bar */}
      <Header />

      <div className='changelog-listing-container'>
        <div className='text-section'>
          <h4 className='heading'>Changelog</h4>
          <p className='sub-title'>
            Match is constantly evolving. You can see the new updates here
          </p>
        </div>

        <div className='changelog-card-section'>
          <ChangelogSec />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Changelog;
