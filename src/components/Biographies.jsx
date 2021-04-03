/* eslint-disable jsx-a11y/alt-text */

import { Fragment, Component } from 'react';

import biographyData from '../data/biographies.json';
import '../styles/biography.css';

export default class Biographies extends Component {
  render() {
    let picElems = biographyData.map((person, i) =>
      <img
        key={`organizer-pic-${i}`}
        src={person.picturePath}
        className="profile-picture"></img>
    );
    return <Fragment>
      <div id="bio-container">
        {picElems}
      </div>
    </Fragment>
  }
}
