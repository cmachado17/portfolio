import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const ModalCertificado = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleCerrarModal}>
      <Modal.Header closeButton>Titulo</Modal.Header>
      <Modal.Body>
        <Image src="" rounded className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.handleCerrarModal}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCertificado;
