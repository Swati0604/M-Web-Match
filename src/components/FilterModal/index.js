import React, { Component, useState } from 'react';
import { Modal } from 'react-bootstrap';

//Images
import close from '../../assets/close.svg';
import Tabs from '../Tabs';

// Styles
import './styles.scss';

const FilterModal = (props) => {
  const {
    handleClose,
    isModalVisible,
    defaultActiveKey,
    tab1,
    tab2,
    tab3,
    modalHeading,
    firstTabContent,
    secondTabContent,
    thirdTabContent,
    firstTabContentTitle,
    secondTabContentTitle,
    thirdTabContentTitle,
    onClickClear,
    onClickApply,
  } = props;
  return (
    <>
      <Modal
        show={isModalVisible}
        //onHide={handleClose}
        backdrop='static'
        animation={false}
        className='filter-modal-style'
      >
        <div className='close-button' onClick={handleClose}>
          <img src={close} alt='close-button' className='cloase-icon' />
        </div>
        <Modal.Body>
          <div className='top-header'>
            <p className='filter-job-heading'>{modalHeading}</p>
          </div>

          <Tabs
            tab1={tab1}
            tab2={tab2}
            tab3={tab3}
            defaultActiveKey={defaultActiveKey}
            firstTabContentTitle={firstTabContentTitle}
            secondTabContentTitle={secondTabContentTitle}
            thirdTabContentTitle={thirdTabContentTitle}
            firstTabContent={firstTabContent}
            secondTabContent={secondTabContent}
            thirdTabContent={thirdTabContent}
          />

          <div className='filter-button-container'>
            <button
              className='outline-button filter-button'
              onClick={onClickClear}
            >
              Clear Filters
            </button>
            <button
              className='solid-button filter-button'
              onClick={onClickApply}
            >
              Apply Filters
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilterModal;
