import React, { useState } from 'react';
import CountryFilter from '../Components/Countries/CountryFilter';
import CountryList from '../Components/Countries/CountryList';
import { CountriesContext } from '../Contexts/CountriesContext';

function Search() {
  const [countries, setCountries] = useState();

  return (
    <div>
      <CountriesContext.Provider value={{ countries, setCountries }}>
        <CountryFilter />
        <CountryList />
      </CountriesContext.Provider>
    </div>
  );
}

export default Search;
