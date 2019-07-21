import React from 'react';
import styles from '../css/Orderer.module.css';

const Orderer = ({ setOrder }) => {
  return (
    <select onChange={setOrder} className={styles.orderbutton}>
      <option value="desc">Desc</option>
      <option value="asc">Asc</option>
    </select>
  );
};

export default Orderer;
