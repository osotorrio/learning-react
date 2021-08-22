import { useContext } from 'react';
import { CountriesContext } from '../../Contexts/CountriesContext';

function CountryFilter() {
  const { countries, setCountries } = useContext(CountriesContext);

  const changeHandle = e => {
    const filtered = countries.all.filter(country =>
      country.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setCountries({ ...countries, filtered });
  };

  return (
    <form>
      <input onChange={changeHandle} placeholder="Type to filter out" />
    </form>
  );
}

export default CountryFilter;
