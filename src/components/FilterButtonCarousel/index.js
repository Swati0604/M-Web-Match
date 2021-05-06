//Images
import arrowBottom from '../../assets/arrow-bottom.svg';
import cross from '../../assets/cross.svg';

//Styles
import './styles.scss';

function FilterButtonCarousel(props) {
  return (
    <div className='filter-button-carousel-style'>
      <div className='carousel'>
        {props.filterButtons.map((data, index) => (
          <div className='filter-button-container' key={index}>
            <button
              className={
                data.isDataSelected ? 'filter-button selected' : 'filter-button'
              }
              //onClick={(id) => props.onClickFilterButton(data.id)}
              onClick={(id) => data.onClick(data.id)}
            >
              {data.buttonLeftImg && (
                <img
                  src={data.buttonLeftImg}
                  alt='button-left-image'
                  className='button-left-image'
                />
              )}
              {data.buttonName}
              {!data.filter &&
                (data.isDataSelected ? (
                  <img src={cross} alt='cross-image' className='cross-image' />
                ) : (
                  <img
                    src={arrowBottom}
                    alt='button-right-image'
                    className='button-right-image'
                  />
                ))}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterButtonCarousel;
