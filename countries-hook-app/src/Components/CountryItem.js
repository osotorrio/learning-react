import PropTypes from 'prop-types';
import React from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const imageStyle = {
  width: '3rem',
  height: '3rem',
  margin: '.50rem',
};

function CountryItem({ country }) {
  return (
    <ListGroup.Item>
      <Link
        to={{
          pathname: '/details',
          state: country,
        }}>
        <Image src={country.flag} style={imageStyle} thumbnail />
        {country.name}
      </Link>
    </ListGroup.Item>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
