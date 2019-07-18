import React from 'react';

const Orderer = ({ setOrder }) => {
  return (
    <select onChange={setOrder}>
      <option value="desc">Descending</option>
      <option value="asc">Ascending</option>
    </select>
  );
};

export default Orderer;
