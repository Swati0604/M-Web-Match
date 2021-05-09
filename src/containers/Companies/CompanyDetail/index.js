import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import Footer from '../../../components/Footer';
import BottomNavBar from '../../../components/BottomNavBar';
import DetailsHeader from '../../../components/DetailsHeader';

//Images
import locationIcon from '../../../assets/location.svg';
import flag from '../../../assets/flag.svg';

//Styles
import './styles.scss';
import JobCard from '../../../components/JobCard';

function CompanyDetail(props) {
  const [key, setKey] = useState('about');
  const companyName = props.match.params.companyName;

  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 27) + '...' : str;
  };

  const truncateTag = (str) => {
    return str.length > 10 ? str.substring(0, 8) + '...' : str;
  };

  return (
    <div className='company-detail-style'>
      {props.db &&
        props.db.Companies &&
        props.db.Companies.filter((data) => data.Company === companyName).map(
          (data, index) => {
            return (
              <div className='company-info-container'>
                <DetailsHeader
                  imgSrc={data.Logo}
                  companyName={data.Company}
                  pageName='Company'
                  bgColor={data.Color}
                  href='/companies-list'
                />
                <div className='company-name'>
                  {data.Company && <h4 className='heading'>{data.Company}</h4>}

                  {data.Locations && (
                    <div className='icons-text'>
                      <img alt='icons' className='icons' src={locationIcon} />
                      <p className='sub-title'>{truncate(data.Locations)}</p>
                    </div>
                  )}

                  {data.Age && (
                    <div className='icons-text'>
                      <img alt='icons' className='icons' src={flag} />
                      <p className='sub-title'>{data.Age}</p>
                    </div>
                  )}

                  {/* tag to define company */}
                  <div className='tag-container'>
                    {data.Tag1 && <p className='tag'>{data.Tag1}</p>}
                    {data.Tag2 && <p className='tag'>{data.Tag2}</p>}
                    {data.Tag3 && <p className='tag'>{data.Tag3}</p>}
                  </div>
                </div>

                <div className='tab-section'>
                  <Tabs
                    id='controlled-tab-example'
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    //style={{ borderBottom: `2px solid ${data.Color}` }}
                  >
                    <Tab eventKey='about' title='About' className='tab-all'>
                      <div className='tab-content'>
                        <p className='sub-title'>{data.Description}</p>
                      </div>
                    </Tab>

                    <Tab eventKey='jobs' title='Jobs'>
                      <div className='tab-content'>
                        {props.db.Sheet1.filter(
                          (item) => item.Company === data.Company
                        ).map((item) => (
                          <JobCard
                            position={item.Position}
                            jobType={item.JobType}
                            location={item.Location}
                            experience={item.Experience}
                            isRemote={item.Remote}
                            href={item.Link}
                            slug={item.Slug}
                          />
                        ))}
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            );
          }
        )}

      <Footer />
    </div>
  );
}

export default withGoogleSheets(['Sheet1', 'Companies'])(CompanyDetail);
