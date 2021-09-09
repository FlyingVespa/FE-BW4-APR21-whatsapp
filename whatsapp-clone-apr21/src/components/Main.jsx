import React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import CenterSection from "./MainSection/CenterSection";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Main = (props) => {
  const [showRightbar, setShowRightbar] = useState(false);

  const [rooms, setRooms] = useState([]);
  const [mainUser, setMainUser] = useState(null);

  const URL = "http://localhost:4444";
  const getRooms = async () => {
    try {
      const res = await fetch(`${URL}/rooms/me`);
      if (res.ok) {
        const data = await res.json();
        setRooms(data);
      }
    } catch (error) {}
  };

  const getMainUser = async () => {
    try {
      const res = await fetch(`${URL}/users/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("user:", data);
        setMainUser(data);
      }
    } catch (error) {}
  };

  const getAllUsers = async () => {
    try {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("AllUSERS:", data);
        setMainUser(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getRooms();
    getMainUser();
    getAllUsers();
  }, []);

  return (
    <Container className="mainpage_container">
      <Button
        onClick={() => {
          setShowRightbar(true);
        }}
      >
        Show Right
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          setShowRightbar(false);
        }}
      >
        Close Right
      </Button>
      <Row>
        {!showRightbar && rooms ? (
          <>
            <Col className="p-0" xs={3}>
              <LeftSidebar rooms={rooms} mainUser={mainUser} />
            </Col>
            <Col className="p-0" xs={9}>
              <CenterSection rooms={rooms} />
            </Col>
          </>
        ) : (
          <>
            <Col className="p-0" xs={3}>
              <LeftSidebar
                rooms={rooms}
                mainUser={mainUser}
                routerProps={props.routerProps}
              />
            </Col>

            <CenterSection rooms={rooms} mainUser={mainUser} r />

            <RightSidebar rooms={rooms} mainUser={mainUser} />
          </>
        )}
      </Row>
    </Container>
  );
};

export default Main;
