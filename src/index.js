import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GradIssues from './components/GradDemands';
import UndergradIssues from './components/UndergradDemands';
import Biographies from './components/Biographies';
import LandingPage from './components/LandingPage';
import DemandList from './components/DemandList';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
    <div id="main-container">
      <DemandList resourceUrl="/data/undergraduate-demands.json" />
      <DemandList resourceUrl="/data/graduate-demands.json" theme="white" />
      <Biographies />
      <GradIssues />
      <div> &nbsp;</div>
      <UndergradIssues />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
