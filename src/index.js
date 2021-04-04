import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Biographies from './components/Biographies';
import LandingPage from './components/LandingPage';
import DemandList from './components/DemandList';

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
    <div id="main-container">
      <Biographies />
      <DemandList
        header="Undergraduate Demands"
        resourceUrl="/data/undergraduate-demands.json" />
      <DemandList
        header="Graduate Demands"
        resourceUrl="/data/graduate-demands.json"
        theme="white" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
