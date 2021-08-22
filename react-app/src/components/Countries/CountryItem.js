import PropTypes from 'prop-types';
import React from 'react';

function CountryItem(props) {
  return <div>{props.name}</div>;
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CountryItem;
