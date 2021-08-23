import { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { CountriesContext } from '../Contexts/CountriesContext';
import CountryItem from './CountryItem';

function CountryList() {
  const { countries } = useContext(CountriesContext);

  if (!countries) return null;

  return (
    <ListGroup variant="flush">
      {countries.filtered.map(country => {
        return <CountryItem key={country.alpha3Code} country={country} />;
      })}
    </ListGroup>
  );
}

export default CountryList;
