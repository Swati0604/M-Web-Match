import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

//Styles
import './styles.scss';

const Tabs = (props) => {
  const {
    defaultActiveKey,
    tab1,
    tab2,
    tab3,
    firstTabContent,
    secondTabContent,
    thirdTabContent,
    firstTabContentTitle,
    secondTabContentTitle,
    thirdTabContentTitle,
  } = props;
  return (
    <div className='tabs'>
      <Tab.Container id='left-tabs-example' defaultActiveKey={defaultActiveKey}>
        <div className='row'>
          <div className='col-4 tabs-column'>
            <Nav className='flex-column'>
              <Nav.Item>
                <Nav.Link eventKey='first'>{tab1}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>{tab2}</Nav.Link>
              </Nav.Item>
              {tab3 && (
                <Nav.Item>
                  <Nav.Link eventKey='third'>{tab3}</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </div>
          <div className='col-8'>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                {firstTabContentTitle && (
                  <p className='title2 tab-content-title'>
                    {firstTabContentTitle}
                  </p>
                )}
                {firstTabContent}
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                {secondTabContentTitle && (
                  <p className='title2 tab-content-title'>
                    {secondTabContentTitle}
                  </p>
                )}
                {secondTabContent}
              </Tab.Pane>
              {tab3 && (
                <Tab.Pane eventKey='third'>
                  {thirdTabContentTitle && (
                    <p className='title2 tab-content-title'>
                      {thirdTabContentTitle}
                    </p>
                  )}
                  {thirdTabContent}
                </Tab.Pane>
              )}
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Tabs;
