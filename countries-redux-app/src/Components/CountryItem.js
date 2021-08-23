import PropTypes from 'prop-types';
import React from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { select } from '../Redux/countrySlice';

const imageStyle = {
  width: '3rem',
  height: '3rem',
  margin: '.50rem',
};

function CountryItem({ country }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const selectCountry = () => {
    dispatch(select(country));
    history.push('/details');
  };

  return (
    <ListGroup.Item>
      <div onClick={selectCountry}>
        <Image src={country.flag} style={imageStyle} thumbnail />
        {country.name}
      </div>
    </ListGroup.Item>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
