import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GradIssues from './GradDemands';
import UndergradIssues from './UndergradDemands';
import Biographies from './components/Biographies';
import LandingPage from './LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <LandingPage />
      <Biographies />
      <GradIssues />
      <div> &nbsp;</div>
      <UndergradIssues />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
