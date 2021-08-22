import { useContext } from 'react';
import { CountriesContext } from '../../Contexts/CountriesContext';

function CountryFilter() {
  const { countries, setCountries } = useContext(CountriesContext);

  const changeHandle = e => {
    const filteredCountries = countries.filter(country =>
      country.name.toLowerCase().startsWith(e.target.value)
    );
    setCountries(filteredCountries);
  };

  return (
    <form>
      <input onChange={changeHandle} />
    </form>
  );
}

export default CountryFilter;
