import React from 'react';
import { Button } from 'react-bootstrap';

const Modal = () => {
    return (
        <div>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are you Sure?</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Cancle </Button>
    <Button variant="primary">Delete</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Modal;