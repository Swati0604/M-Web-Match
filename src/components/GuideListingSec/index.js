import { useState } from 'react';
import { withGoogleSheets } from 'react-db-google-sheets';

//Custom Component
import LoadMoreButton from '../LoadMoreButton';
import FilterButtonCarousel from '../FilterButtonCarousel';
import FilterModal from '../FilterModal';
import FilterList from '../FilterList';

//Image
import filter from '../../assets/filter.svg';

//Styles
import './styles.scss';
import GuideListingCard from '../GuideListingCard';
import NotFound from '../NotFound';

const category = [
  {
    id: 1,
    name: 'category',
    filterName: 'Job Preparation',
  },
  {
    id: 2,
    name: 'category',
    filterName: 'Portfolio',
  },
];

const time = [
  {
    id: 3,
    name: 'time',
    filterName: 'Any duration',
  },
  {
    id: 4,
    name: 'time',
    filterName: 'Less than 3 min',
  },
  {
    id: 5,
    name: 'time',
    filterName: '3 min',
  },
  {
    id: 6,
    name: 'time',
    filterName: 'More than 3 min',
  },
];

function GuideListingSec(props) {
  const [visibleGuide, setVisibleGuide] = useState(6);
  const [isModalVisible, setModalVisible] = useState(false);
  const [defaultActiveKey, setDefaultActiveKey] = useState();
  const [categoryFilter, setCategoryFilter] = useState();
  const [timeFilter, setTimeFilter] = useState();
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const loadMore = () => {
    setVisibleGuide(visibleGuide + 6);
  };

  const openModal = (index) => {
    const temp = filterButtonsData[index];
    setDefaultActiveKey(temp.defaultActiveKey);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const categoryDataChange = (e) => {
    if (e.target.checked) {
      setCategoryFilter(e.target.value);
    }
  };

  const timeDataChange = (e) => {
    if (e.target.checked) {
      setTimeFilter(e.target.value);
    }
  };

  const onClickClear = () => {
    setCategoryFilter();
    setTimeFilter();
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
      buttonName: 'Category',
      onClick: (id) => {
        openModal(id);
      },
    },
    2: {
      id: 2,
      defaultActiveKey: 'second',
      buttonName: 'Reading Time',
      onClick: (id) => {
        openModal(id);
      },
    },
  });

  const onClickApply = () => {
    let preFilterButton = filterButtonsData;

    if (categoryFilter) {
      preFilterButton[1] = {
        id: 'categoryFilter',
        defaultActiveKey: 'first',
        isDataSelected: true,
        buttonName: categoryFilter,
        onClick: (id) => {
          setCategoryFilter(null);
          let temp = filterButtonsData;
          temp[1] = {
            id: 1,
            defaultActiveKey: 'first',
            isDataSelected: false,
            buttonName: 'category',
            onClick: (id) => {
              openModal(id);
            },
          };
          setFilterButtonsData(temp);
        },
      };
    }

    if (timeFilter) {
      preFilterButton[2] = {
        id: 'timeFilter',
        defaultActiveKey: 'second',
        isDataSelected: true,
        buttonName: timeFilter,
        onClick: (id) => {
          setTimeFilter(null);
          let temp = filterButtonsData;
          temp[2] = {
            id: 2,
            defaultActiveKey: 'second',
            isDataSelected: false,
            buttonName: 'Reading Time',
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

  const filterData = props.db.Guide.filter((data) => {
    if (isFilterApplied === true) {
      if (categoryFilter && !timeFilter) {
        return data.Tags === categoryFilter;
      } else if (timeFilter && !categoryFilter) {
        if (timeFilter === 'Any duration') {
          return data.Time;
        } else if (timeFilter === 'Less than 3 min') {
          return parseInt(data.Time) < 3;
        } else if (timeFilter === '3 min') {
          return parseInt(data.Time) === 3;
        } else if (timeFilter === 'More than 3 min') {
          return parseInt(data.Time) > 3;
        }
      } else if (categoryFilter && timeFilter) {
        if (timeFilter === 'Any duration') {
          return data.Time && data.Tags === categoryFilter;
        } else if (timeFilter === 'Less than 3 min') {
          return parseInt(data.Time) < 3 && data.Tags === categoryFilter;
        } else if (timeFilter === '3 min') {
          return parseInt(data.Time) === 3 && data.Tags === categoryFilter;
        } else if (timeFilter === 'More than 3 min') {
          return parseInt(data.Time) > 3 && data.Tags === categoryFilter;
        }
      } else if (!categoryFilter && !timeFilter) {
        return data.Tags || data.Time;
      }
    } else {
      return data.Tags || data.Time;
    }
  });

  return (
    <div className='guide-listing-sec-style'>
      <FilterButtonCarousel
        filterButtons={Object.values(filterButtonsData)}
        onClickFilterButton={openModal}
      />

      {props.db &&
        props.db.Guide &&
        filterData.slice(0, visibleGuide).map((data, index) => (
          <div key={index}>
            <GuideListingCard
              url={data.Image}
              title={data.Title}
              tag={data.Tags}
              time={data.Time}
              slug={data.Slug}
            />
          </div>
        ))}

      {filterData.length > 6 &&
        visibleGuide < props.db.Guide.length &&
        props.db.Guide.length >= 6 && (
          <LoadMoreButton
            onClick={() => loadMore()}
            buttonText='Load More Guides'
          />
        )}

      {filterData.length === 0 && (
        <NotFound
          title='Sorry! We couldn’t find the filtered guide that you’re looking for.'
          subTitle='Check back in some time. It’s a good thing we always keep our guides updated.'
        />
      )}

      <FilterModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        modalHeading='Filter Guides'
        defaultActiveKey={defaultActiveKey}
        tab1='Category'
        tab2='Reading Time'
        firstTabContentTitle='Select a category:'
        secondTabContentTitle='Select a reading time:'
        firstTabContent={
          <FilterList filterList={category} onChange={categoryDataChange} />
        }
        secondTabContent={
          <FilterList filterList={time} onChange={timeDataChange} />
        }
        onClickClear={onClickClear}
        onClickApply={onClickApply}
      />
    </div>
  );
}

export default withGoogleSheets(['Guide'])(GuideListingSec);
