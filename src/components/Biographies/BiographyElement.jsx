import { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import BiographyImage from './BiographyImage';
import BiographyModal from './BiographyModal';

const lorem = new LoremIpsum();

/**
 * @param {BiographyElementProps} props
 */
export default function BiographyElement(props) {
  const [ modalShow, setModalShow ] = useState(false);

  // When modal's "close" button is clicked, hide the modal
  const onClose = () => setModalShow(false);
  // This is an arbitrary option, as anything can make this modal show.
  // Though, for our purpose, clicking on an image will trigger this event
  const onOpen = () => setModalShow(true);

  return (
    <div className="profile">
      <BiographyImage src={props.picturePath} onClick={onOpen} />
      <p className="profile-title">{props.name}</p>
      <BiographyModal
        onHide={onClose}
        show={modalShow}
        title={props.name}
        body={props.body || lorem.generateSentences(15)} />
    </div>
  )
}

/**
 * @typedef BiographyElementProps
 * @prop {string} picturePath Path to profile picture
 * @prop {string} name Name of person
 * @prop {string} body Plaintext or HTMl biographical data
 */
