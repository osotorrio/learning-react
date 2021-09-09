import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import CountryItem from './CountryItem';

function CountryList({ countries }) {
  if (!countries) return null;

  return (
    <ListGroup variant="flush">
      {countries.map(country => {
        return <CountryItem key={country.alpha3Code} country={country} />;
      })}
    </ListGroup>
  );
}

CountryList.propTypes = {
  countries: PropTypes.object.isRequired,
};

export default CountryList;
