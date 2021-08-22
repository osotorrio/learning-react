import { useEffect, useState } from 'react';
import { getAllCountries } from '../../Modules/countriesApi';
import RepositoryItem from './RepositoryItem';

function RepositoryList() {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    setCountries(await getAllCountries());
  }, []);

  return countries.map(country => {
    return <RepositoryItem key={country.alpha3Code} name={country.name} />;
  });
}

export default RepositoryList;
