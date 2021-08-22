import { useContext, useEffect } from 'react';
import { CountriesContext } from '../../Contexts/CountriesContext';
import { getAllCountries } from '../../Modules/countriesApi';
import CountryItem from './CountryItem';

function CountryList() {
  const { countries, setCountries } = useContext(CountriesContext);

  useEffect(async () => {
    const data = await getAllCountries();
    setCountries({ all: data, filtered: data });
  }, []);

  if (!countries) return null;

  return countries.filtered.map(country => {
    return <CountryItem key={country.alpha3Code} name={country.name} />;
  });
}

export default CountryList;
