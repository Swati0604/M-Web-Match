import { useState } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import JobCard from '../JobCard';
import LoadMoreButton from '../LoadMoreButton';
import FilterButtonCarousel from '../FilterButtonCarousel';
import FilterModal from '../FilterModal';
import FilterList from '../FilterList';

//Image
import filter from '../../assets/filter.svg';
import arrowBottom from '../../assets/arrow-bottom.svg';

//Styles
import './styles.scss';

const jobType = [
  {
    id: 1,
    filterName: 'All Jobs',
  },
  {
    id: 2,
    filterName: 'Full Time',
  },
  {
    id: 3,
    filterName: 'Internship',
  },
  {
    id: 4,
    filterName: 'Freelance',
  },
];
const experience = [
  {
    id: 5,
    filterName: '0 -1 years',
  },
  {
    id: 6,
    filterName: '1 -2 years',
  },
  {
    id: 7,
    filterName: '2 -3  years',
  },
  {
    id: 8,
    filterName: '3 - 4 years',
  },
  {
    id: 9,
    filterName: '4 - 5 years',
  },
  {
    id: 10,
    filterName: '6+  years',
  },
];

const location = [
  {
    id: 11,
    filterName: 'Any location',
  },
  {
    id: 12,
    filterName: 'Delhi',
  },
  {
    id: 13,
    filterName: 'Bangalore',
  },
  {
    id: 14,
    filterName: 'Pune',
  },
  {
    id: 15,
    filterName: 'Ahmedabad',
  },
  {
    id: 16,
    filterName: 'Bangalore',
  },
];

const filterButtonsData = [
  {
    id: 0,
    defaultActiveKey: 'first',
    buttonLeftImg: filter,
    buttonName: 'Filters',
  },
  {
    id: 1,
    defaultActiveKey: 'first',
    buttonRightImg: arrowBottom,
    buttonName: 'Experience',
  },
  {
    id: 2,
    defaultActiveKey: 'second',
    buttonRightImg: arrowBottom,
    buttonName: 'Location',
  },
  {
    id: 3,
    defaultActiveKey: 'third',
    buttonRightImg: arrowBottom,
    buttonName: 'Job Type',
  },
];

function HomeAllJobs(props) {
  const [visibleJob, setVisibleJob] = useState(9);
  const [isModalVisible, setModalVisible] = useState(false);
  const [defaultActiveKey, setDefaultActiveKey] = useState();

  const loadMore = () => {
    setVisibleJob(visibleJob + 9);
  };

  const openModal = (index) => {
    const temp = filterButtonsData[index];
    setDefaultActiveKey(temp.defaultActiveKey);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <div className='home-all-job-style'>
      <FilterButtonCarousel
        filterButtons={filterButtonsData}
        onClickFilterButton={openModal}
      />

      {props.db &&
        props.db.Sheet1 &&
        props.db.Sheet1.slice(0, visibleJob).map((data, index) => (
          <div>
            {props.db &&
              props.db.Companies &&
              props.db.Companies.filter(
                (item) => item.Company === data.Company
              ).map((item, index) => (
                <JobCard
                  companyLogo={item.Logo}
                  position={data.Position}
                  company={item.Company}
                  jobType={data.JobType}
                  location={data.Location}
                  experience={data.Experience}
                  isRemote={data.Remote}
                  href={data.Link}
                  slug={data.Slug}
                  tag1={item.Tag1}
                  tag2={item.Tag2}
                  tag3={item.Tag3}
                />
              ))}
          </div>
        ))}

      <LoadMoreButton onClick={() => loadMore()} />

      <FilterModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        modalHeading='Filter Jobs'
        defaultActiveKey={defaultActiveKey}
        tab1='Experience'
        tab2='Location'
        tab3='Job Type'
        firstTabContentTitle='Select experience in years:'
        secondTabContentTitle='Select a job location:'
        thirdTabContentTitle='Select a required job type:'
        firstTabContent={<FilterList filterList={experience} />}
        secondTabContent={<FilterList filterList={location} />}
        thirdTabContent={<FilterList filterList={jobType} />}
      />
    </div>
  );
}

export default withGoogleSheets(['Sheet1', 'Companies'])(HomeAllJobs);
