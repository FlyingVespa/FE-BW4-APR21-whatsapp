import React from "react";
import UserInfo from "./UserInfo";
import "./rightsidebar.css";
import { Col, Container } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const RightSidebar = () => {
  const sidebarOpen = useSelector((s) => s.sidebarOpen);
  const rooms = useSelector((state) => state.rooms);
  const d_none = sidebarOpen ? "" : "d-none";
  return (
    <>
      <Col className={"p-0 " + d_none} xs={3}>
        <Container className="rightsidebar_container p-0">
          <h2>RIGHT</h2>
          {rooms &&
            rooms.map((room) => {
              return room?.participants.map((p) => <p>{p.username}</p>);
            })}
        </Container>
      </Col>
    </>
  );
};

export default RightSidebar;
