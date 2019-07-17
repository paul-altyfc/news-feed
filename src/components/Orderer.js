import React from 'react';

const Orderer = ({ setOrder }) => {
  return (
    <select onChange={setOrder}>
      <option value="desc">Latest first</option>
      <option value="asc">Earliest first</option>
    </select>
  );
};

export default Orderer;
