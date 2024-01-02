import React from 'react';

import CountersInContext from './contextComponents/CountersInContext';
import CountersInRedux from './reduxComponents/CountersInRedux';

import './style.css';

export default function App() {
  return (
    <div>
      <CountersInContext />

      <br />
      <br />

      <CountersInRedux />
    </div>
  );
}
