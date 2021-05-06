import { useState } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import JobCard from '../JobCard';
import LoadMoreButton from '../LoadMoreButton';
import FilterButtonCarousel from '../FilterButtonCarousel';
import FilterModal from '../FilterModal';
import FilterList from '../FilterList';

//Image
import arrowBottom from '../../assets/arrow-bottom.svg';
import filter from '../../assets/filter.svg';
import closeBottom from '../../assets/close.svg';

//Styles
import './styles.scss';

const jobType = [
  {
    id: 1,
    name: 'jobType',
    filterName: 'All Jobs',
  },
  {
    id: 2,
    name: 'jobType',
    filterName: 'Full Time',
  },
  {
    id: 3,
    name: 'jobType',
    filterName: 'Internship',
  },
  {
    id: 4,
    name: 'jobType',
    filterName: 'Freelance',
  },
];
const experience = [
  {
    id: 5,
    name: 'experience',
    filterName: '0 -1 years',
  },
  {
    id: 6,
    name: 'experience',
    filterName: '1 -2 years',
  },
  {
    id: 7,
    name: 'experience',
    filterName: '2 -3  years',
  },
  {
    id: 8,
    name: 'experience',
    filterName: '3 - 4 years',
  },
  {
    id: 9,
    name: 'experience',
    filterName: '4 - 5 years',
  },
  {
    id: 10,
    name: 'experience',
    filterName: '6+  years',
  },
];

const location = [
  {
    id: 11,
    name: 'location',
    filterName: 'Any location',
  },
  {
    id: 12,
    name: 'location',
    filterName: 'Delhi',
  },
  {
    id: 13,
    name: 'location',
    filterName: 'Bangalore',
  },
  {
    id: 14,
    name: 'location',
    filterName: 'Pune',
  },
  {
    id: 15,
    name: 'location',
    filterName: 'Ahmedabad',
  },
  {
    id: 16,
    name: 'location',
    filterName: 'Bangalore',
  },
];

function HomeAllJobs(props) {
  const [visibleJob, setVisibleJob] = useState(9);
  const [isModalVisible, setModalVisible] = useState(false);
  const [defaultActiveKey, setDefaultActiveKey] = useState();
  const [experienceFilter, setExperienceFilter] = useState();
  const [locationFilter, setlocationFilter] = useState();
  const [jobTypeFilter, setjobTypeFilter] = useState();
  const [isFilterApplied, setIsFilterApplied] = useState(false);

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

  const experienceDataChange = (e) => {
    if (e.target.checked) {
      console.log('experience=====>>>', e.target.value);
      setExperienceFilter(e.target.value);
    }
  };

  const locationDataChange = (e) => {
    if (e.target.checked) {
      console.log('location=====>>>', e.target.value);
      setlocationFilter(e.target.value);
    }
  };

  const jobTypeDataChange = (e) => {
    if (e.target.checked) {
      console.log('jobType=====>>>', e.target.value);
      setjobTypeFilter(e.target.value);
    }
  };

  const onClickClear = () => {
    setExperienceFilter();
    setlocationFilter();
    setjobTypeFilter();
    setModalVisible(false);
  };

  const [filterButtonsData, setFilterButtonsData] = useState({
    0: {
      id: 0,
      defaultActiveKey: 'first',
      buttonLeftImg: filter,
      buttonName: 'Filters',
      onClick: (id) => {
        openModal(id);
      },
    },
    1: {
      id: 1,
      defaultActiveKey: 'first',
      buttonRightImg: arrowBottom,
      buttonName: 'Experience',
      onClick: (id) => {
        openModal(id);
      },
    },
    2: {
      id: 2,
      defaultActiveKey: 'second',
      buttonRightImg: arrowBottom,
      buttonName: 'Location',
      onClick: (id) => {
        openModal(id);
      },
    },
    3: {
      id: 3,
      defaultActiveKey: 'third',
      buttonRightImg: arrowBottom,
      buttonName: 'Job Type',
      onClick: (id) => {
        openModal(id);
      },
    },
  });

  const onClickApply = () => {
    let preFilterButton = filterButtonsData;

    if (experienceFilter) {
      preFilterButton[1] = {
        id: 'experienceFilter',
        defaultActiveKey: 'first',
        buttonLeftImg: arrowBottom,
        buttonName: experienceFilter,
        onClick: (id) => {
          setExperienceFilter(null);
          let temp = filterButtonsData;
          temp[1] = {
            id: 1,
            defaultActiveKey: 'first',
            buttonRightImg: arrowBottom,
            buttonName: 'Experience',
            onClick: (id) => {
              openModal(id);
            },
          };
          setFilterButtonsData(temp);
        },
      };
    }

    if (locationFilter) {
      preFilterButton[2] = {
        id: 2,
        defaultActiveKey: 'second',
        buttonLeftImg: arrowBottom,
        buttonName: locationFilter,
        onClick: (id) => {
          console.log('Location Filter Close wali id', id);
        },
      };
    } else {
      preFilterButton[2] = {
        id: 2,
        defaultActiveKey: 'second',
        buttonRightImg: arrowBottom,
        buttonName: 'Location',
        onClick: (id) => {
          openModal(id);
        },
      };
    }

    if (jobTypeFilter) {
      preFilterButton[3] = {
        id: 3,
        defaultActiveKey: 'third',
        buttonLeftImg: arrowBottom,
        buttonName: jobTypeFilter,
        onClick: (id) => {
          console.log('Job Type Filter Close wali id', id);
        },
      };
    } else {
      preFilterButton[3] = {
        id: 3,
        defaultActiveKey: 'third',
        buttonRightImg: arrowBottom,
        buttonName: 'Job Type',
        onClick: (id) => {
          openModal(id);
        },
      };
    }
    setFilterButtonsData(preFilterButton);

    setIsFilterApplied(true);
    handleClose();
  };

  return (
    <div className='home-all-job-style'>
      <FilterButtonCarousel
        filterButtons={Object.values(filterButtonsData)}
        onClickFilterButton={openModal}
      />
      {console.log(isFilterApplied)}

      {props.db &&
        props.db.Sheet1 &&
        props.db.Sheet1.filter((data) => {
          switch (isFilterApplied) {
            case locationFilter && jobTypeFilter:
              console.log('123');
              return (
                data.JobType === jobTypeFilter &&
                data.Location === locationFilter
              );
            case locationFilter:
              return data.Location === locationFilter;
            case jobTypeFilter:
              return data.JobType === jobTypeFilter;
            default:
              return data.Location && data.JobType;
          }
        })
          .slice(0, visibleJob)
          .map((data, index) => (
            <div key={index}>
              {data.Location}
              {props.db &&
                props.db.Companies &&
                props.db.Companies.filter(
                  (item) => item.Company === data.Company
                ).map((item, index) => (
                  <div key={index}>
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
                  </div>
                ))}
            </div>
          ))}

      <LoadMoreButton onClick={() => loadMore()} buttonText='Load More Jobs' />

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
        firstTabContent={
          <FilterList filterList={experience} onChange={experienceDataChange} />
        }
        secondTabContent={
          <FilterList filterList={location} onChange={locationDataChange} />
        }
        thirdTabContent={
          <FilterList filterList={jobType} onChange={jobTypeDataChange} />
        }
        onClickClear={onClickClear}
        onClickApply={onClickApply}
      />
    </div>
  );
}

export default withGoogleSheets(['Sheet1', 'Companies'])(HomeAllJobs);
