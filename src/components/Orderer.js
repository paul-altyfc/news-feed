import React from 'react';
import styles from './Orderer.module.css';

const Orderer = ({ setOrder }) => {
  return (
    <select onChange={setOrder} className={styles.orderbutton}>
      <option value="desc">Descending</option>
      <option value="asc">Ascending</option>
    </select>
  );
};

export default Orderer;
