import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Details() {
  const country = useLocation().state;
  return (
    <Card style={{ width: '36rem' }}>
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
            {country.region}
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
      <Button variant="primary">Search another country</Button>
    </Card>
  );
}

export default Details;
