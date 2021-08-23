import React from 'react';
import { useLocation } from 'react-router-dom';
import CountryCard from '../Components/CountryCard';

function Details() {
  const country = useLocation().state;
  return <CountryCard country={country} />;
}

export default Details;
