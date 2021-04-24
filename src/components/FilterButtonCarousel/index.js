//Styles
import './styles.scss';

function FilterButtonCarousel(props) {
  return (
    <div className='filter-button-carousel-style'>
      <div className='carousel'>
        {props.filterButtons.map((data) => (
          <div className='filter-button-container'>
            <button
              className='filter-button'
              onClick={(id) => props.onClickFilterButton(data.id)}
            >
              {data.buttonLeftImg && (
                <img
                  src={data.buttonLeftImg}
                  alt='button-left-image'
                  className='button-left-image'
                />
              )}
              {data.buttonName}
              {data.buttonRightImg && (
                <img
                  src={data.buttonRightImg}
                  alt='button-right-image'
                  className='button-right-image'
                />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterButtonCarousel;
