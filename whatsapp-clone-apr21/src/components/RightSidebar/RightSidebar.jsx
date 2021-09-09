import React from "react";
import UserInfo from "./UserInfo";
import "./rightsidebar.css";
import { Col, Container } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const RightSidebar = (props) => {
  const sidebarOpen = useSelector((s) => s.sidebarOpen);

  if (!sidebarOpen) return null;
  else
    return (
      <Col className="p-0" xs={3}>
        <Container className="rightsidebar_container p-0">
          <h2>RIGHT</h2>
          {props.rooms.map((room, i) => (
            <UserInfo key={i} room={room} />
          ))}
        </Container>
      </Col>
    );
};
export default RightSidebar;
// THE USER INFO WITH WHOM THE CONVERSATION IS HELD (NOT THE LOGGED IN PERSON) MUST BE SHOWN HERE
// IF IT IS MORE THAN ONE PARTICIPANT< SHOW ROOM IMAGE (THAT CAN BE UPDATED) WITH ALL PARTICIPANTS WITHA KICK BUTTON
