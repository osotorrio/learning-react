import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { filter } from '../Redux/countrySlice';

function CountryFilter() {
  const dispatch = useDispatch();

  const filterCountriesOut = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          onChange={filterCountriesOut}
          placeholder="Type to filter out countries"
        />
      </Form.Group>
    </Form>
  );
}

export default CountryFilter;
