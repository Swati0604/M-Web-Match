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
import NotFound from '../NotFound';

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
    filterName: '2 -3 years',
  },
  {
    id: 8,
    name: 'experience',
    filterName: '3 - 4 years',
  },
  {
    id: 9,
    name: 'experience',
    filterName: '4 -5 years',
  },
  {
    id: 10,
    name: 'experience',
    filterName: '6+ years',
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
    filterName: 'Gurgaon',
  },
  {
    id: 17,
    name: 'location',
    filterName: 'Hyderabad',
  },
  {
    id: 18,
    name: 'location',
    filterName: 'Mumbai',
  },
];

function HomeAllJobs(props) {
  const [visibleJob, setVisibleJob] = useState(9);
  const [isModalVisible, setModalVisible] = useState(false);
  const [defaultActiveKey, setDefaultActiveKey] = useState();
  const [experienceFilter, setExperienceFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
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
      setExperienceFilter(e.target.value);
    }
  };

  const locationDataChange = (e) => {
    if (e.target.checked) {
      setLocationFilter(e.target.value);
    }
  };

  const jobTypeDataChange = (e) => {
    if (e.target.checked) {
      setjobTypeFilter(e.target.value);
    }
  };

  const onClickClear = () => {
    setExperienceFilter();
    setLocationFilter();
    setjobTypeFilter();
    setModalVisible(false);
  };

  const [filterButtonsData, setFilterButtonsData] = useState({
    0: {
      id: 0,
      defaultActiveKey: 'first',
      filter: true,
      buttonLeftImg: filter,
      buttonName: 'Filters',
      onClick: (id) => {
        openModal(id);
      },
    },
    1: {
      id: 1,
      defaultActiveKey: 'first',
      buttonName: 'Experience',
      onClick: (id) => {
        openModal(id);
      },
    },
    2: {
      id: 2,
      defaultActiveKey: 'second',
      buttonName: 'Location',
      onClick: (id) => {
        openModal(id);
      },
    },
    3: {
      id: 3,
      defaultActiveKey: 'third',
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
        isDataSelected: true,
        buttonName: experienceFilter,
        onClick: (id) => {
          setExperienceFilter(null);
          let temp = filterButtonsData;
          temp[1] = {
            id: 1,
            defaultActiveKey: 'first',
            isDataSelected: false,
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
        id: 'locationFilter',
        defaultActiveKey: 'second',
        buttonName: locationFilter,
        isDataSelected: true,
        onClick: (id) => {
          setLocationFilter(null);
          let temp = filterButtonsData;
          temp[2] = {
            id: 2,
            defaultActiveKey: 'second',
            buttonName: 'Location',
            isDataSelected: false,
            onClick: (id) => {
              openModal(id);
            },
          };
          setFilterButtonsData(temp);
        },
      };
    }

    if (jobTypeFilter) {
      preFilterButton[3] = {
        id: 'jobTypeFilter',
        defaultActiveKey: 'third',
        buttonName: jobTypeFilter,
        isDataSelected: true,
        onClick: (id) => {
          setjobTypeFilter(null);
          let temp = filterButtonsData;
          temp[3] = {
            id: 3,
            defaultActiveKey: 'third',
            isDataSelected: false,
            buttonName: 'Job Type',
            onClick: (id) => {
              openModal(id);
            },
          };
          setFilterButtonsData(temp);
        },
      };
    }

    setFilterButtonsData(preFilterButton);

    setIsFilterApplied(true);
    handleClose();
  };

  const shuffle = (array) => {
    if (shuffle.done) return;

    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    shuffle.done = true;

    return array;
  };

  shuffle(props.db.Sheet1);

  const filterJobData = props.db.Sheet1.filter((data) => {
    if (isFilterApplied === true) {
      if (locationFilter && !experienceFilter && !jobTypeFilter) {
        return data.Location === locationFilter;
      } else if (jobTypeFilter && !locationFilter && !experienceFilter) {
        return data.JobType === jobTypeFilter;
      } else if (experienceFilter && !locationFilter && !jobTypeFilter) {
        if (experienceFilter === '0 -1 years') {
          return (
            parseInt(data.Experience) === 1 || data.Experience === 'Fresher'
          );
        } else if (experienceFilter === '1 -2 years') {
          return (
            parseInt(data.Experience) === 1 || parseInt(data.Experience) === 2
          );
        } else if (experienceFilter === '2 -3 years') {
          return (
            parseInt(data.Experience) === 2 || parseInt(data.Experience) === 3
          );
        } else if (experienceFilter === '3 -4 years') {
          return (
            parseInt(data.Experience) === 3 || parseInt(data.Experience) === 4
          );
        } else if (experienceFilter === '4 - 5 years') {
          return (
            parseInt(data.Experience) === 4 || parseInt(data.Experience) === 5
          );
        } else if (experienceFilter === '6+ years') {
          return parseInt(data.Experience) >= 6;
        }
      } else if (locationFilter && jobTypeFilter && !experienceFilter) {
        return (
          data.Location === locationFilter && data.JobType === jobTypeFilter
        );
      } else if (locationFilter && experienceFilter && !jobTypeFilter) {
        if (experienceFilter === '0 -1 years') {
          return (
            (parseInt(data.Experience) === 1 ||
              data.Experience === 'Fresher') &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '1 -2 years') {
          return (
            (parseInt(data.Experience) === 1 ||
              parseInt(data.Experience) === 2) &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '2 -3 years') {
          return (
            (parseInt(data.Experience) === 2 ||
              parseInt(data.Experience) === 3) &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '3 -4 years') {
          return (
            (parseInt(data.Experience) === 3 ||
              parseInt(data.Experience) === 4) &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '4 - 5 years') {
          return (
            (parseInt(data.Experience) === 4 ||
              parseInt(data.Experience) === 5) &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '6+ years') {
          return (
            parseInt(data.Experience) >= 6 && data.Location === locationFilter
          );
        }
      } else if (jobTypeFilter && experienceFilter && !locationFilter) {
        if (experienceFilter === '0 -1 years') {
          return (
            (parseInt(data.Experience) === 1 ||
              data.Experience === 'Fresher') &&
            data.JobType === jobTypeFilter
          );
        } else if (experienceFilter === '1 -2 years') {
          return (
            (parseInt(data.Experience) === 1 ||
              parseInt(data.Experience) === 2) &&
            data.JobType === jobTypeFilter
          );
        } else if (experienceFilter === '2 -3 years') {
          return (
            (parseInt(data.Experience) === 2 ||
              parseInt(data.Experience) === 3) &&
            data.JobType === jobTypeFilter
          );
        } else if (experienceFilter === '3 -4 years') {
          return (
            (parseInt(data.Experience) === 3 ||
              parseInt(data.Experience) === 4) &&
            data.JobType === jobTypeFilter
          );
        } else if (experienceFilter === '4 - 5 years') {
          return (
            (parseInt(data.Experience) === 4 ||
              parseInt(data.Experience) === 5) &&
            data.JobType === jobTypeFilter
          );
        } else if (experienceFilter === '6+ years') {
          return (
            parseInt(data.Experience) >= 6 && data.JobType === jobTypeFilter
          );
        }
      } else if (jobTypeFilter && experienceFilter && locationFilter) {
        if (experienceFilter === '0 -1 years') {
          return (
            (parseInt(data.Experience) === 1 ||
              data.Experience === 'Fresher') &&
            data.JobType === jobTypeFilter &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '1 -2 years') {
          return (
            (parseInt(data.Experience) === 1 ||
              parseInt(data.Experience) === 2) &&
            data.JobType === jobTypeFilter &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '2 -3 years') {
          return (
            (parseInt(data.Experience) === 2 ||
              parseInt(data.Experience) === 3) &&
            data.JobType === jobTypeFilter &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '3 -4 years') {
          return (
            (parseInt(data.Experience) === 3 ||
              parseInt(data.Experience) === 4) &&
            data.JobType === jobTypeFilter &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '4 - 5 years') {
          return (
            (parseInt(data.Experience) === 4 ||
              parseInt(data.Experience) === 5) &&
            data.JobType === jobTypeFilter &&
            data.Location === locationFilter
          );
        } else if (experienceFilter === '6+ years') {
          return (
            parseInt(data.Experience) >= 6 &&
            data.JobType === jobTypeFilter &&
            data.Location === locationFilter
          );
        }
      } else if (!experienceFilter && !locationFilter && !jobTypeFilter) {
        return data.Location && data.Experience && data.Location;
      }
    } else {
      return data.Location && data.Experience && data.Location;
    }
  });

  return (
    <div className='home-all-job-style'>
      <FilterButtonCarousel
        filterButtons={Object.values(filterButtonsData)}
        onClickFilterButton={openModal}
      />

      {props.db &&
        props.db.Sheet1 &&
        filterJobData.slice(0, visibleJob).map((data, index) => (
          <div key={index}>
            {props.db &&
              props.db.Companies &&
              props.db.Companies.filter(
                (item) => item.Company === data.Company && data.Closed != 'Yes'
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

      {filterJobData.length > 9 &&
        filterJobData.length > visibleJob &&
        props.db.Sheet1.length > visibleJob &&
        !(visibleJob === visibleJob + 1) &&
        props.db.Sheet1.length >= 9 && (
          <LoadMoreButton
            onClick={() => loadMore()}
            buttonText='Load More Jobs'
          />
        )}

      {filterJobData.length === 0 && (
        <NotFound
          title='Sorry! We couldn’t find anything here.'
          subTitle='Check back in some time. It’s a good thing we update the jobs twice a week. So, fingers crossed 🤞.'
        />
      )}

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
