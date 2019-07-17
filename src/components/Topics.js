import React from 'react';
import styles from './Topics.module.css';

const TopicsSelector = ({ articles }) => {
  const topicsArr = articles.reduce((topics, currArticle) => {
    if (!topics.includes(currArticle.topic)) {
      topics.push(currArticle.topic);
    }
    return topics;
  }, []);

  return (
    <div className={styles.list}>
      <ul>
        <h3>Categories</h3>
        {topicsArr.map(topic => {
          return (
            <li className={styles.listitem} key={topic}>
              <button>{topic}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicsSelector;
