import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Biographies from './components/Biographies';
import LandingPage from './components/LandingPage';
import DemandList from './components/DemandList';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
    <div id="main-container">
      <Biographies />
      <h1>UNDERGRADUATE DEMANDS</h1>
      <DemandList resourceUrl="/data/undergraduate-demands.json" />
      <h1>GRADUATE DEMANDS</h1>
      <DemandList resourceUrl="/data/graduate-demands.json" theme="white" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
