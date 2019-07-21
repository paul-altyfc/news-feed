import React from 'react';
import styles from '../css/Error-page.module.css';

const ErrorPage = ({ text, err }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.textpos}>{text || 'Something went wrong...'}</h1>
      {err ? (
        <p className={styles.textmess}>
          {err.message}. {err.response.data.msg}
        </p>
      ) : null}
    </div>
  );
};

export default ErrorPage;
