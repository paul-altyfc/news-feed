import React from 'react';
import styles from './Sorter.module.css';

const Sorter = ({ setSort }) => {
  return (
    <select className={styles.sortbutton} onChange={setSort}>
      <option value="created_at">Date</option>
      <option value="title">Title</option>
      <option value="topic">Category</option>
      <option value="author">Author</option>
      <option value="votes">Votes</option>
      <option value="comment_count">Comments</option>
    </select>
  );
};

export default Sorter;
