import { useEffect, useState } from 'react';
import { getAllCountries } from '../../Modules/countriesApi';
import CountryItem from './CountryItem';

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    setCountries(await getAllCountries());
  }, []);

  return countries.map(country => {
    return <CountryItem key={country.alpha3Code} name={country.name} />;
  });
}

export default CountryList;
