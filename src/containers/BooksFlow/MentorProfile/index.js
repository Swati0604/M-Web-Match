import React from 'react';
import { Link } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Footer from '../../../components/Footer';
import BackNavigation from '../../../components/BackNavigation';
import Title from '../../../components/Title';
import BooksCarousel from '../../../components/BooksCarousel';

//Images
import jobTypeIcon from '../../../assets/job-type.svg';
import insta from '../../../assets/insta.svg';
import linkedin from '../../../assets/linkedin.svg';
import twitter from '../../../assets/twitter.svg';

//Styles
import './styles.scss';
import RecommendedBooks from '../../../components/RecommendedBooks';

function MentorProfile(props) {
  const mentorName = props.match.params.mentorName;

  return (
    <div className='mentor-profile-style'>
      <BackNavigation pageName='Mentor' pageType={mentorName} />

      <div className='mentor-profile-banner'>
        {props.db &&
          props.db.Mentors &&
          props.db.Mentors.map(
            (data) =>
              data.Name === mentorName && (
                <div>
                  <div className='banner-top-section'>
                    <div className='image-tag-container'>
                      <div className='mentor-image-container'>
                        <img src={data.Image} className='mentor-image' />
                      </div>
                      <div className='mentor-tag-container'>
                        <p className='mentor-tag'>MENTOR</p>
                      </div>
                    </div>
                    <div className='text-box'>
                      <h4 className='heading'>{data.Name}</h4>
                      {data.Title && (
                        <div className='icons-text'>
                          <img
                            alt='icons'
                            className='icons'
                            src={jobTypeIcon}
                          />
                          <p className='sub-title'>{data.Title}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='banner-bottom-section'>
                    <p className='sub-title'>{data.MentorDescription}</p>
                    <div className='social-media-icon-container'>
                      <a href={data.Twitter} className='social-media-link'>
                        <img
                          src={twitter}
                          alt='twitter'
                          className='social-media-icon'
                        />
                      </a>
                      <a href={data.Insta} className='social-media-link'>
                        <img
                          src={insta}
                          alt='insta'
                          className='social-media-icon'
                        />
                      </a>
                      <a href={data.Linkedin} className='social-media-link'>
                        <img
                          src={linkedin}
                          alt='linkedIn'
                          className='social-media-icon'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>

      <div className='designer-listing-content'>
        <div className='text-box'>
          <h4 className='heading'>6 books recommended by {mentorName}</h4>
          <RecommendedBooks mentorName={mentorName} />
        </div>

        <div className='books-carousel-container'>
          <div className='heading-see-all-button'>
            <div className='text-section'>
              <Title title='Suggestions by other designers' />
            </div>
            <Link className='see-all-button'>See all</Link>
          </div>

          <BooksCarousel />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default withGoogleSheets('Mentors')(MentorProfile);
