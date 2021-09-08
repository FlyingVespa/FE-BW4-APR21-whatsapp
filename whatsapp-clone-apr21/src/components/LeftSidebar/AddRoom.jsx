import React from "react";
import { useState, useEffect } from "react";
import { Container, Button, Dropdown, Modal, Form } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";

function AddRoom() {
  const [showAddRoomModal, setShowAddRoomModal] = useState(false);
  const [allUsers, setAllUsers] = useState(false);

  const handleClose = () => setShowAddRoomModal(false);
  const handleShow = () => setShowAddRoomModal(true);

  const openModel = () => {};
  return (
    <>
      <Container>
        <Dropdown id="dropdown">
          <Dropdown.Toggle variant="none">
            <ThreeDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleShow}>Create New Room</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Starred</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>

      <Modal show={showAddRoomModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="roomName">
              <Form.Label>Room Name</Form.Label>
              <Form.Control type="text" placeholder="Room Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="participants">
              <Form.Label>Select Participants</Form.Label>
              {/* MAP CHECK BOCKS WITH ALL USERS? */}
              <Form.Check type="checkbox" label="participants1" />
              <Form.Check type="checkbox" label="participants2" />
              <Form.Check type="checkbox" label="participants3" />
              <Form.Check type="checkbox" label="participants4" />
              <Form.Check type="checkbox" label="participants5" />
              <Form.Check type="checkbox" label="participants6" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Room
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddRoom;
