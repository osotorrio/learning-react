import { useContext, useEffect } from 'react';
import { CountriesContext } from '../../Contexts/CountriesContext';
import { getAllCountries } from '../../Modules/countriesApi';
import CountryItem from './CountryItem';

function CountryList() {
  const { countries, setCountries } = useContext(CountriesContext);

  useEffect(async () => {
    setCountries(await getAllCountries());
  }, []);

  if (countries) {
    return countries.map(country => {
      return <CountryItem key={country.alpha3Code} name={country.name} />;
    });
  } else {
    return null;
  }
}

export default CountryList;
