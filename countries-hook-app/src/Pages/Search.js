import React from 'react';
import CountryFilter from '../Components/CountryFilter';
import CountryList from '../Components/CountryList';
import useGetAllCountries from '../Modules/countriesApi';

function Search() {
  const result = useGetAllCountries();
  const countries = { filtered: [], all: [] };

  const filterCountriesOut = e => {
    const filtered = countries.all.filter(country =>
      country.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    countries.filtered = filtered;
  };

  if (result.error) {
    return <div>Error: {result.error.message}</div>;
  } else if (result.loading) {
    return <div>Loading...</div>;
  } else {
    countries.filtered = result.data;
    countries.all = result.data;
  }

  return (
    <>
      <CountryFilter onChange={filterCountriesOut} />
      <CountryList countries={countries.filtered} />
    </>
  );
}

export default Search;
