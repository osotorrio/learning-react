import { useContext, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { CountriesContext } from '../Contexts/CountriesContext';
import { getAllCountries } from '../Modules/countriesApi';
import CountryItem from './CountryItem';

function CountryList() {
  const { countries, setCountries } = useContext(CountriesContext);

  useEffect(async () => {
    const data = await getAllCountries();
    setCountries({ all: data, filtered: data });
  }, []);

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
