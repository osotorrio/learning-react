import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { CountriesContext } from '../Contexts/CountriesContext';

function CountryFilter() {
  const { countries, setCountries } = useContext(CountriesContext);

  const filterCountriesOut = e => {
    const filtered = countries.all.filter(country =>
      country.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setCountries({ ...countries, filtered });
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
