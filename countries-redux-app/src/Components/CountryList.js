import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import CountryItem from './CountryItem';

function CountryList() {
  const { filtered } = useSelector(state => state.countries);

  if (!filtered) return null;

  return (
    <ListGroup variant="flush">
      {filtered.map(country => {
        return <CountryItem key={country.alpha3Code} country={country} />;
      })}
    </ListGroup>
  );
}

export default CountryList;
