import React from "react";
import UserInfo from "./UserInfo";
import "./rightsidebar.css";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const RightSidebar = () => {
  const sidebarOpen = useSelector((s) => s.sidebarOpen);
  const rooms = useSelector((s) => s.rooms);
  const activeRoom = useSelector((s) => s.selectedRoom);

  const d_none = sidebarOpen ? "" : "d-none";
  return (
    <>
      <Col className={"p-0 " + d_none} xs={3}>
        <Container className="rightsidebar_container p-0">
          <h5>Total Participants: {activeRoom?.participants.length}</h5>
          {activeRoom?.participants.map((p) => {
            return (
              <Container className="singleRoom p-0 m-0">
                <Row className=" px-0 py-2 m-0 border-bottom">
                  <Col className="p-0 m-0 singleRoom_col_2">
                    <h4> {p?.username}</h4>
                  </Col>
                  <Col>
                    <Button variant="danger">Remove</Button>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Container>
      </Col>
    </>
  );
};

export default RightSidebar;
