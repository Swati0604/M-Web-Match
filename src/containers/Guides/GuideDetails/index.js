import React from 'react';
import { Link } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Footer from '../../../components/Footer';
import BackNavigation from '../../../components/BackNavigation';
import Title from '../../../components/Title';
import SubTitle from '../../../components/SubTitle';
import HomeGuideSec from '../../../components/HomeGuideSec';

//Images
import jobType from '../../../assets/job-type.svg';
import clock from '../../../assets/clock.svg';
import link from '../../../assets/link.svg';

//Styles
import './styles.scss';
import Emoji from '../../../components/EmojiImport';

function GuideDetails(props) {
  const slug = props.match.params.slug;
  return (
    <div className='guide-details-style'>
      {props.db &&
        props.db.Guide &&
        props.db.Guide.filter((data) => data.Slug === slug).map((data) => {
          return (
            <>
              <BackNavigation pageName={data.Title} pageType='Guide' />

              <div className='guide-details-banner'>
                <img src={data.Image} className='guide-image' />
              </div>

              <div className='guide-details-content'>
                <div className='text-box'>
                  <h4 className='heading'>{data.Title}</h4>
                </div>

                {data.authorName && (
                  <div className='author-details'>
                    {data.authorImg && (
                      <div className='author-img-cont'>
                        <img
                          src={data.authorImg}
                          className='img'
                          alt='author-img'
                        />
                      </div>
                    )}
                    <p className='author-name'>{data.authorName}</p>
                  </div>
                )}

                <div className='tag-button-container'>
                  <div className='tag-container'>
                    {data.Tags && (
                      <div className='tag'>
                        <img src={jobType} className='img' alt='resource-img' />
                        <p className='sub-title'>{data.Tags}</p>
                      </div>
                    )}
                    {data.Time && (
                      <div className='tag'>
                        <img src={clock} className='img' alt='resource-img' />
                        <p className='sub-title'>{data.Time} Min read</p>
                      </div>
                    )}
                  </div>

                  <button className='copy-link-button'>
                    <img src={link} alt='link' className='link-img' />
                    Copy Link
                  </button>
                </div>

                <div className='guide-text-section'>
                  <div className='guide-details'>
                    <p className='title'>
                      <Emoji symbol='🎯' /> Purpose
                    </p>
                    <p className='sub-title'>{data.Purpose}</p>
                  </div>

                  <p className='title'>{data.title}</p>
                  <div className='guide-details'>
                    <p className='title'>
                      <Emoji symbol='✅' /> Do’s
                    </p>
                    <pre className='sub-title'>
                      {data.Do.replaceAll('✅', '•')}
                    </pre>
                  </div>

                  <div className='guide-details'>
                    <p className='title'>
                      <Emoji symbol='❌' /> Dont’s
                    </p>
                    <pre className='sub-title'>
                      {data.DoNots.replaceAll('❌', '•')}
                    </pre>
                  </div>
                </div>
              </div>
            </>
          );
        })}

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
  );
}

export default withGoogleSheets('Guide')(GuideDetails);
