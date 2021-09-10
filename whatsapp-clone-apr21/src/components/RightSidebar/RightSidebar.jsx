import React from "react";
import UserInfo from "./UserInfo";
import "./rightsidebar.css";
import { Col, Container } from "react-bootstrap";
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
          <h2>{activeRoom?.name}</h2>
          {activeRoom?.participants.map((p) => {
            return <p>{p?.username}</p>;
          })}
        </Container>
      </Col>
    </>
  );
};

export default RightSidebar;
