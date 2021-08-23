import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CountryFilter from '../Components/CountryFilter';
import CountryList from '../Components/CountryList';
import { getAllCountries } from '../Modules/countriesApi';
import { add } from '../Redux/countrySlice';

function Search() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const countries = await getAllCountries();
    dispatch(add(countries));
  }, []);

  return (
    <>
      <CountryFilter />
      <CountryList />
    </>
  );
}

export default Search;
