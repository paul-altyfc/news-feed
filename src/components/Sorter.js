import React from 'react';
import styles from '../css/Sorter.module.css';

const Sorter = ({ setSort }) => {
  return (
    <>
      <h2 className={styles.label}>Sort:</h2>
      <select name="sort" className={styles.sortbutton} onChange={setSort}>
        <option className={styles.droptext} value="created_at">
          Date
        </option>
        <option value="title">Title</option>
        <option value="topic">Category</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
    </>
  );
};

export default Sorter;
