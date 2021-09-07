import React from "react";
import { Container } from "react-bootstrap";
import ChatList from "./ChatList";
import "./leftsidebar.css";

export default function LeftSidebar() {
  return (
    <>
      <Container className="leftsidebar_container p-0">
        <h2>Left</h2>
        <ChatList />
      </Container>
    </>
  );
}
// USER PROFILE NEEDS TO POP UP HERE WITH TERNARY STATEMENT IF CLICKED TO OPEN USER INFO TAB
