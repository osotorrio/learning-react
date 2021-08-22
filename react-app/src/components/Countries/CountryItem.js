import PropTypes from 'prop-types';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function CountryItem({ country }) {
  return (
    <ListGroup.Item>
      <Link
        to={{
          pathname: '/details',
          state: country,
        }}>
        {country.name}
      </Link>
    </ListGroup.Item>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
