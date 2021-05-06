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
            type='radio'
            id={data.id}
            name={data.name}
            label={data.filterName}
            value={data.filterName}
            onChange={(e) => props.onChange(e)}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterList;
