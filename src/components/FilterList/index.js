import Form from 'react-bootstrap/Form';

//Styles
import './styles.scss';

function FilterList(props) {
  return (
    <div className='filter-list-style'>
      {props.filterList.map((data, index) => (
        <div className='filter-list-container' key={index}>
          <Form.Check
            custom
            type='checkbox'
            id={data.id}
            label={data.filterName}
            onClick={console.log('Hey')}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterList;
