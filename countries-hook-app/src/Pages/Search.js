import React, { useEffect, useState } from 'react';
import CountryFilter from '../Components/CountryFilter';
import CountryList from '../Components/CountryList';
import useGetAllCountries from '../Modules/countriesApi';

function Search() {
  const result = useGetAllCountries();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(result.data);
  }, [result]);

  const filterCountriesOut = e => {
    const filtered = result.data.filter(country =>
      country.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setCountries(filtered);
  };

  if (result.error) {
    return <div>Error: {result.error.message}</div>;
  } else if (result.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CountryFilter onChange={filterCountriesOut} />
      <CountryList countries={countries} />
    </>
  );
}

export default Search;
