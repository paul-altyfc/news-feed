import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import ErrorPage from './components/error-page';
import Topics from './components/Topics';
import Nav from './components/nav';

const App = () => {
  console.log('in app');
  return (
    <>
      <div className="app">
        {/* <Topics /> */}
        <Nav />
        <Router>
          <Home path="/" />
          <Topics path="/topics" />
          <ErrorPage text="404: Page Not Found" default />
        </Router>
      </div>
    </>
  );
};

export default App;
