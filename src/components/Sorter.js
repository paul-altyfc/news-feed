import React from 'react';

const Sorter = ({ setSort }) => {
  return (
    <select onChange={setSort}>
      <option value="created_at">Date</option>
      <option value="title">Title</option>
      <option value="topic">Topic</option>
      <option value="author">Author</option>
      <option value="votes">Votes</option>
      <option value="comment_count">Comments</option>
    </select>
  );
};

export default Sorter;
