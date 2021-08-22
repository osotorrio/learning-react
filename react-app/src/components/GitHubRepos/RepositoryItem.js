import PropTypes from 'prop-types';
import React from 'react';

function RepositoryItem(props) {
  return <div>{props.name}</div>;
}

RepositoryItem.propTypes = {
  name: PropTypes.string,
};

export default RepositoryItem;
