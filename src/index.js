import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GradIssues from './gradDemands';
import UndergradIssues from './undergradDemands';
import reportWebVitals from './reportWebVitals';
import homepage from './landingPage';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <homepage />
      <div> &nbsp;</div>
      <GradIssues />
      <div> &nbsp;</div>
      <UndergradIssues />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
