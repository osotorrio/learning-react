import React from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const country = useLocation().state;
  return (
    <div>
      <h1>Details</h1>
      {country.name}
    </div>
  );
}

export default Details;
