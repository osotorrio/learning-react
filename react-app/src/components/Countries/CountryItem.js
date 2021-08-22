import PropTypes from 'prop-types';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function CountryItem({ name }) {
  return (
    <ListGroup.Item>
      <Link to="/details">{name}</Link>
    </ListGroup.Item>
  );
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CountryItem;
