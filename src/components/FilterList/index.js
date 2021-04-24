import Form from 'react-bootstrap/Form';

//Styles
import './styles.scss';

function FilterList(props) {
  return (
    <div className='filter-list-style'>
      {props.filterList.map((data) => (
        <div className='filter-list-container'>
          <Form.Check
            custom
            type='checkbox'
            id={data.id}
            label={data.filterName}
            //onChange={props.onChange}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterList;
