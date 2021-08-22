import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from 'react-router-dom';

function CountryCard({ country }) {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <Card>
      <Card.Img variant="top" src={country.flag} />
      <Card.Header>
        <b>{country.name}</b>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Country Codes: </b>
            {country.alpha2Code}, {country.alpha3Code}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Capital: </b>
            {country.capital}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Region: </b>
            {country.region}, {country.subregion}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Borders: </b>
            {country.borders.length > 0 ? country.borders.join(', ') : 'None'}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Area: </b>
            {country.area} km2
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Population: </b>
            {country.population} people
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Button variant="primary" onClick={clickHandler}>
        Search another country
      </Button>
    </Card>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
