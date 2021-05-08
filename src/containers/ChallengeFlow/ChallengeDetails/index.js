import React from 'react';
import { Link } from 'react-router-dom';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Footer from '../../../components/Footer';
import BottomNavBar from '../../../components/BottomNavBar';
import HomeGuideSec from '../../../components/HomeGuideSec';

//Styles
import './styles.scss';
import Title from '../../../components/Title';
import SubTitle from '../../../components/SubTitle';
import DetailsHeader from '../../../components/DetailsHeader';
import OtherChallenges from '../../../components/OtherChallenges';

function ChallengeDetails(props) {
  const companyName = props.match.params.companyName;

  return (
    <div className='challenge-details-style'>
      {props.db &&
        props.db.Assignment &&
        props.db.Assignment.filter((data) => data.Company === companyName).map(
          (data, index) => {
            return (
              <div className='challenge-container'>
                <DetailsHeader
                  imgSrc={data.Logo}
                  companyName={companyName}
                  pageName='Take Home Challenge'
                  bgColor={data.color}
                  copyLinkButton={true}
                  href='/challenge-listing'
                />
                <div className='challenge'>
                  {data.heading1 && (
                    <pre className='heading'>{data.heading1}</pre>
                  )}
                  {data.para1 && <pre className='sub-title'>{data.para1}</pre>}

                  {data.heading2 && (
                    <pre className='title'>{data.heading2}</pre>
                  )}

                  {data.para2 && <pre className='sub-title'>{data.para2}</pre>}

                  {data.heading3 && (
                    <pre className='title'>{data.heading3}</pre>
                  )}

                  {data.para3 && <pre className='sub-title'>{data.para3}</pre>}

                  {data.heading4 && (
                    <pre className='title'>{data.heading4}</pre>
                  )}

                  {data.para4 && <pre className='sub-title'>{data.para4}</pre>}

                  {data.heading5 && (
                    <pre className='title'>{data.heading5}</pre>
                  )}

                  {data.para5 && <pre className='sub-title'>{data.para5}</pre>}
                </div>
              </div>
            );
          }
        )}

      <div className='other-challenge-listing'>
        <div className='challenge-section'>
          <div className='heading-see-all-button'>
            <Title title='Other Challenges' />
            <Link to='/challenge-listing' className='see-all-button'>
              See all
            </Link>
          </div>

          <SubTitle subTitle='Look for challenges by companies' />

          <div className='challenge-card'>
            <OtherChallenges companyName={companyName} />
          </div>
        </div>

        <Footer />
      </div>

      <BottomNavBar />
    </div>
  );
}

export default withGoogleSheets('Assignment')(ChallengeDetails);
