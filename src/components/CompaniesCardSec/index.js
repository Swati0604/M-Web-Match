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
import CompanyCard from '../CompanyCard';

const companyType = [
  {
    id: 1,
    name: 'companyType',
    filterName: 'Startups',
  },
  {
    id: 2,
    name: 'companyType',
    filterName: 'MNCs',
  },
  {
    id: 3,
    name: 'companyType',
    filterName: 'B2B',
  },
  {
    id: 4,
    name: 'companyType',
    filterName: 'B2C',
  },
  {
    id: 5,
    name: 'companyType',
    filterName: 'Agencies',
  },
];
const domain = [
  {
    id: 6,
    name: 'domain',
    filterName: 'Fintech',
  },
  {
    id: 7,
    name: 'domain',
    filterName: 'Edtech',
  },
  {
    id: 8,
    name: 'domain',
    filterName: 'Travel',
  },
  {
    id: 9,
    name: 'domain',
    filterName: 'Home Delivery',
  },
  {
    id: 10,
    name: 'domain',
    filterName: 'Entertainment',
  },
  {
    id: 11,
    name: 'domain',
    filterName: 'Gaming',
  },
];

const location = [
  {
    id: 12,
    name: 'location',
    filterName: 'Mumbai',
  },
  {
    id: 13,
    name: 'location',
    filterName: 'Delhi',
  },
  {
    id: 14,
    name: 'location',
    filterName: 'Bangalore',
  },
  {
    id: 15,
    name: 'location',
    filterName: 'Pune',
  },
  {
    id: 16,
    name: 'location',
    filterName: 'Ahmedabad',
  },
  {
    id: 17,
    name: 'location',
    filterName: 'Bangalore',
  },
  {
    id: 18,
    name: 'location',
    filterName: 'Gurgaon',
  },
];

function HomeAllJobs(props) {
  const [visibleCompany, setVisibleCompany] = useState(9);
  const [isModalVisible, setModalVisible] = useState(false);
  const [defaultActiveKey, setDefaultActiveKey] = useState();
  const [domainFilter, setDomainFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
  const [companyTypeFilter, setCompanyTypeFilter] = useState();
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const loadMore = () => {
    setVisibleCompany(visibleCompany + 9);
  };

  const openModal = (index) => {
    const temp = filterButtonsData[index];
    setDefaultActiveKey(temp.defaultActiveKey);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const domainDataChange = (e) => {
    if (e.target.checked) {
      setDomainFilter(e.target.value);
    }
  };

  const locationDataChange = (e) => {
    if (e.target.checked) {
      setLocationFilter(e.target.value);
    }
  };

  const companyTypeDataChange = (e) => {
    if (e.target.checked) {
      setCompanyTypeFilter(e.target.value);
    }
  };

  const onClickClear = () => {
    setDomainFilter();
    setLocationFilter();
    setCompanyTypeFilter();
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
      buttonName: 'Location',
      onClick: (id) => {
        openModal(id);
      },
    },
    2: {
      id: 2,
      defaultActiveKey: 'second',
      buttonName: 'Domain',
      onClick: (id) => {
        openModal(id);
      },
    },
    3: {
      id: 3,
      defaultActiveKey: 'third',
      buttonName: 'Company Type',
      onClick: (id) => {
        openModal(id);
      },
    },
  });

  const onClickApply = () => {
    let preFilterButton = filterButtonsData;

    if (locationDataChange) {
      preFilterButton[1] = {
        id: 'locationFilter',
        defaultActiveKey: 'first',
        isDataSelected: true,
        buttonName: locationFilter,
        onClick: (id) => {
          setLocationFilter(null);
          let temp = filterButtonsData;
          temp[1] = {
            id: 1,
            defaultActiveKey: 'first',
            isDataSelected: false,
            buttonName: 'Location',
            onClick: (id) => {
              openModal(id);
            },
          };
          setFilterButtonsData(temp);
        },
      };
    }

    if (domainFilter) {
      preFilterButton[2] = {
        id: 'domainFilter',
        defaultActiveKey: 'second',
        buttonName: domainFilter,
        isDataSelected: true,
        onClick: (id) => {
          setDomainFilter(null);
          let temp = filterButtonsData;
          temp[2] = {
            id: 2,
            defaultActiveKey: 'second',
            buttonName: 'Domain',
            isDataSelected: false,
            onClick: (id) => {
              openModal(id);
            },
          };
          setFilterButtonsData(temp);
        },
      };
    }

    if (companyTypeFilter) {
      preFilterButton[3] = {
        id: 'companyTypeFilter',
        defaultActiveKey: 'third',
        buttonName: companyTypeFilter,
        isDataSelected: true,
        onClick: (id) => {
          setCompanyTypeFilter(null);
          let temp = filterButtonsData;
          temp[3] = {
            id: 3,
            defaultActiveKey: 'third',
            isDataSelected: false,
            buttonName: 'Company Type',
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

  const filterCompanyData = props.db.Companies.filter((data) => {
    if (isFilterApplied === true) {
      if (locationFilter) {
        return data.Locations === locationFilter;
      }
    } else {
      return data.Locations;
    }
  });

  return (
    <div className='company-sec-style'>
      <FilterButtonCarousel
        filterButtons={Object.values(filterButtonsData)}
        onClickFilterButton={openModal}
      />

      {props.db &&
        props.db.Companies &&
        filterCompanyData.slice(0, visibleCompany).map((data, index) => {
          const availableJobs = props.db.Sheet1.filter(
            (item) => item.Company === data.Company
          ).length;
          return (
            <div key={index}>
              <CompanyCard
                companyLogo={data.Logo}
                position={data.Position}
                company={data.Company}
                location={data.Locations}
                age={data.Age}
                href={data.Link}
                slug={data.Slug}
                tag1={data.Tag1}
                tag2={data.Tag2}
                tag3={data.Tag3}
                companyName={data.Company}
              />

              {availableJobs > 0 && (
                <p className='available-jobs-text'>
                  {availableJobs} Jobs listed from Onething
                </p>
              )}

              {visibleCompany > index + 1 && (
                <div className='horizontal-line'></div>
              )}
            </div>
          );
        })}

      {filterCompanyData.length > 9 &&
        filterCompanyData.length > visibleCompany &&
        props.db.Sheet1.length > visibleCompany &&
        !(visibleCompany === visibleCompany + 1) &&
        props.db.Sheet1.length >= 9 && (
          <div className='btn-cont'>
            <LoadMoreButton
              onClick={() => loadMore()}
              buttonText='Load More Jobs'
            />
          </div>
        )}

      {filterCompanyData.length === 0 && (
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
          <FilterList filterList={location} onChange={locationDataChange} />
        }
        secondTabContent={
          <FilterList filterList={domain} onChange={domainDataChange} />
        }
        thirdTabContent={
          <FilterList
            filterList={companyType}
            onChange={companyTypeDataChange}
          />
        }
        onClickClear={onClickClear}
        onClickApply={onClickApply}
      />
    </div>
  );
}

export default withGoogleSheets(['Sheet1', 'Companies'])(HomeAllJobs);
