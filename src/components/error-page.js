import React from 'react';
import styles from './error-page.module.css';

const ErrorPage = ({ text, err }) => {
  return (
    <div className={styles.main}>
      <h1>{text || 'Something went wrong...'}</h1>
      {err ? (
        <p>
          {err.message}. {err.response.data.msg}
        </p>
      ) : null}
    </div>
  );
};

export default ErrorPage;
