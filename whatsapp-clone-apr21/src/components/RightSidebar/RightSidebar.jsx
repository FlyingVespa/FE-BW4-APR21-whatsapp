import React from "react";
import UserInfo from "./UserInfo";
import "./rightsidebar.css";
import { Container } from "react-bootstrap";

export default function RightSidebar() {
  return (
    <Container className="rightsidebar_container p-0">
      <h2>RIGHT</h2>
      <UserInfo />
    </Container>
  );
}
// THE USER INFO WITH WHOM THE CONVERSATION IS HELD (NOT THE LOGGED IN PERSON) MUST BE SHOWN HERE
// IF IT IS MORE THAN ONE PARTICIPANT< SHOW ROOM IMAGE (THAT CAN BE UPDATED) WITH ALL PARTICIPANTS WITHA KICK BUTTON
