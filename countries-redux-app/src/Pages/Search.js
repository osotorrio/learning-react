import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryFilter from '../Components/CountryFilter';
import CountryList from '../Components/CountryList';
import { getAllCountries } from '../Modules/countriesApi';
import { add } from '../Redux/countrySlice';

function Search() {
  const dispatch = useDispatch();
  const { all } = useSelector(state => state.countries);

  useEffect(async () => {
    if (all.length === 0) {
      const countries = await getAllCountries();
      dispatch(add(countries));
    }
  }, []);

  return (
    <>
      <CountryFilter />
      <CountryList />
    </>
  );
}

export default Search;
