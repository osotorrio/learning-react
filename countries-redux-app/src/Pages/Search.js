import React, { useEffect, useState } from 'react';
import CountryFilter from '../Components/CountryFilter';
import CountryList from '../Components/CountryList';
import { CountriesContext } from '../Contexts/CountriesContext';
import { getAllCountries } from '../Modules/countriesApi';

function Search() {
  const [countries, setCountries] = useState();

  useEffect(async () => {
    const data = await getAllCountries();
    setCountries({ all: data, filtered: data });
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      <CountryFilter />
      <CountryList />
    </CountriesContext.Provider>
  );
}

export default Search;
