import React from "react";
import { useState, useEffect } from "react";
import { Container, Button, Dropdown, Modal, Form } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

function AddRoom() {
  const [showAddRoomModal, setShowAddRoomModal] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [roomParticipants, setRoomParticipants] = useState("");
  const users = useSelector((s) => s.allUsers);

  if (users) {
    setAllUsers(users._id);
    console.log("all", allUsers);
  }
  console.log(users);

  const handleClose = () => setShowAddRoomModal(false);
  const handleShow = () => setShowAddRoomModal(true);

  const URL = "http://localhost:4444";

  const createRoom = async () => {
    try {
      const details = {
        name: roomName,
        participants: roomParticipants,
      };

      const res = await fetch(`${URL}/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(details), // { details: { email: "hello", password: "pasword" } }
      });

      if (res.ok) {
        const data = await res.json();
        console.log("new room:", data);
      }
    } catch (error) {}
  };

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
              <Form.Control
                type="text"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="participants">
              <Form.Label>Select Participants</Form.Label>
              {allUsers &&
                allUsers.map((user) => (
                  <Form.Check type="checkbox" label={user.username} />
                ))}
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
