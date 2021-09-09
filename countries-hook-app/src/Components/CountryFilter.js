import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function CountryFilter({ onChange }) {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" onChange={onChange} placeholder="Type to filter out countries" />
      </Form.Group>
    </Form>
  );
}

CountryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CountryFilter;
