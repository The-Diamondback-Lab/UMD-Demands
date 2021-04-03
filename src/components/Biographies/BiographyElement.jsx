/* eslint-disable jsx-a11y/alt-text */

import { Fragment, useState } from 'react';
import BiographyModal from './BiographyModal';

import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Returns an image element representing a profile picture for a person. When
 * the image is clicked, a modal is shown containing info for that person.
 *
 * @param {BiographyObject} props
 */
export default function BiographyElement(props) {
  const [ modalShow, setModalShow ] = useState(false);

  // When modal's "close" button is clicked, hide the modal
  const onClose = () => setModalShow(false);
  // This is an arbitrary option, as anything can make this modal show.
  // Though, for our purpose, clicking on an image will trigger this event
  const onOpen = () => setModalShow(true);

  return (
    <Fragment>
      <img
        src={props.picturePath}
        className="profile-picture"
        onClick={onOpen}
      ></img>
      <BiographyModal
        onHide={onClose}
        show={modalShow}
        title={props.name}
        body={props.data}
      />
    </Fragment>
  )
}

/**
 * @typedef BiographyObject
 * @prop {string} name The name of the person
 * @prop {string} picturePath Path to a profile picture
 * @prop {string} data Data/content for this person's biography, can be
 * plaintext or HTML.
 */
