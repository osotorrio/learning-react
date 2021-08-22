import React, { useState } from 'react';
import CountryFilter from '../Components/Countries/CountryFilter';
import CountryList from '../Components/Countries/CountryList';
import { CountriesContext } from '../Contexts/CountriesContext';

function Search() {
  const [countries, setCountries] = useState();

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      <CountryFilter />
      <CountryList />
    </CountriesContext.Provider>
  );
}

export default Search;
