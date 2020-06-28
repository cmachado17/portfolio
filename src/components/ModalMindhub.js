import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const ModalMindhub = (props) => {


  return (
    <Modal show={props.show} onHide={props.handleCerrarModal} size="xl">
      <Modal.Header closeButton className="h3 grey-border">{props.titulo}</Modal.Header>
      <Modal.Body className="text-center grey-border">
        <Image src={props.certificado} rounded className="img-fluid" />
      </Modal.Body>
      <Modal.Footer className="grey-border">
        <Button variant="danger" onClick={props.handleCerrarModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMindhub;