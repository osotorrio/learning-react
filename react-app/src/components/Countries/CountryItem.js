import PropTypes from 'prop-types';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function CountryItem(props) {
  return <ListGroup.Item>{props.name}</ListGroup.Item>;
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CountryItem;
