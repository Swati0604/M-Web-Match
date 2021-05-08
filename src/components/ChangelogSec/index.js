import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import NotFound from '../NotFound';
import ChangelogCard from '../ChangelogCard';

//Styles
import './styles.scss';

function ChangelogSec(props) {
  const [key, setKey] = useState('all');
  return (
    <div className='changelog-sec-style'>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey='all' title='All' className='tab-all'>
          {props.db &&
            props.db.Changelogs.map((data) => {
              return (
                <ChangelogCard
                  title={data.Title}
                  type={data.Type}
                  time={data.Date}
                  description={data.Description}
                  Image={data.Image}
                  updater={data.Updater}
                  position={data.Position}
                />
              );
            })}

          {props.db.Changelogs.length === 0 && (
            <div className='not-found-cont'>
              <NotFound
                title='Sorry! We couldn’t find the filtered update that you’re looking for.'
                subTitle='Check back in some time. It’s a good thing we always keep our changelog updated.'
              />
            </div>
          )}
        </Tab>
        <Tab eventKey='features' title='New Features'>
          {props.db &&
            props.db.Changelogs.filter(
              (data) => data.Type === 'New Feature'
            ).map((data) => {
              return (
                <ChangelogCard
                  title={data.Title}
                  type={data.Type}
                  time={data.Date}
                  description={data.Description}
                  Image={data.Image}
                  updater={data.Updater}
                  position={data.Position}
                />
              );
            })}

          {props.db.Changelogs.filter((data) => data.Type === 'New Feature')
            .length === 0 && (
            <div className='not-found-cont'>
              <NotFound
                title='Sorry! We couldn’t find the filtered update that you’re looking for.'
                subTitle='Check back in some time. It’s a good thing we always keep our changelog updated.'
              />
            </div>
          )}
        </Tab>
        <Tab eventKey='improvement' title='Improvement'>
          {props.db &&
            props.db.Changelogs.filter(
              (data) => data.Type === 'Improvement'
            ).map((data) => {
              return (
                <ChangelogCard
                  title={data.Title}
                  type={data.Type}
                  time={data.Date}
                  description={data.Description}
                  Image={data.Image}
                  updater={data.Updater}
                  position={data.Position}
                />
              );
            })}

          {props.db.Changelogs.filter((data) => data.Type === 'Improvement')
            .length === 0 && (
            <div className='not-found-cont'>
              <NotFound
                title='Sorry! We couldn’t find the filtered update that you’re looking for.'
                subTitle='Check back in some time. It’s a good thing we always keep our changelog updated.'
              />
            </div>
          )}
        </Tab>
        <Tab eventKey='fixes' title='Fixes'>
          {props.db &&
            props.db.Changelogs.filter((data) => data.Type === 'Fixes').map(
              (data) => {
                return (
                  <ChangelogCard
                    title={data.Title}
                    type={data.Type}
                    time={data.Date}
                    description={data.Description}
                    Image={data.Image}
                    updater={data.Updater}
                    position={data.Position}
                  />
                );
              }
            )}

          {props.db.Changelogs.filter((data) => data.Type === 'Fixes')
            .length === 0 && (
            <div className='not-found-cont'>
              <NotFound
                title='Sorry! We couldn’t find the filtered update that you’re looking for.'
                subTitle='Check back in some time. It’s a good thing we always keep our changelog updated.'
              />
            </div>
          )}
        </Tab>
      </Tabs>
    </div>
  );
}

export default withGoogleSheets(['Changelogs'])(ChangelogSec);
