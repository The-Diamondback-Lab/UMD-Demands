/* eslint-disable jsx-a11y/alt-text */

import { Fragment } from 'react';

import BiographyElement from './BiographyElement';

import "bootstrap/dist/css/bootstrap.min.css";
import biographyData from '../../data/biographies.json';
import './styles.css';

export default function Biographies() {
  let elems = biographyData.map((person, i) => {
    return <BiographyElement
      key={`organizer-biography-${i}`}
      {...person}
    ></BiographyElement>
  });

  return (
    <Fragment>
      <div id="bio-container">
        {elems}
      </div>
    </Fragment>
  );
}
