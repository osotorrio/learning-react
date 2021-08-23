import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CountryCard() {
  const history = useHistory();
  const { selected } = useSelector(state => state.countries);

  const goToSearchPage = () => {
    history.push('/');
  };

  return (
    <Card>
      <Card.Img variant="top" src={selected.flag} />
      <Card.Header>
        <b>{selected.name}</b>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Capital: </b>
            {selected.capital ? selected.capital : selected.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Languages: </b>
            {selected.languages
              .map(language => {
                return language.name;
              })
              .join(', ')}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Country Codes: </b>
            {selected.alpha2Code}, {selected.alpha3Code}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Region: </b>
            {selected.region}, {selected.subregion}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Borders: </b>
            {selected.borders.length > 0 ? selected.borders.join(', ') : 'None'}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Area: </b>
            {new Intl.NumberFormat('de-DE').format(selected.area)} km2
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Population: </b>
            {new Intl.NumberFormat('de-DE').format(selected.population)} people
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Button variant="primary" onClick={goToSearchPage}>
        Search another country
      </Button>
    </Card>
  );
}

export default CountryCard;
