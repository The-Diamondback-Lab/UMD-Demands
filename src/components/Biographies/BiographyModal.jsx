import { Modal, Button } from "react-bootstrap";

/**
 * A basic modal that displays information about a person.
 *
 * @param {BiographyModalProps} props
 */
export default function BiographyModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{__html: props.body}}></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

/**
 * @typedef BiographyModalProps
 * @prop {boolean} show Whether the modal should be displayed or not
 * @prop {() => void} onHide Callback function for when modal is closed/hidden
 * @prop {string} title Title of the modal
 * @prop {string} body Plaintext or HTML data for the modal's body
 * @prop {string[]} [gallery] Array of picture paths for a gallery
 */
