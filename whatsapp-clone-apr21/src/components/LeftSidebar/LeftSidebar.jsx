import React from "react";
import { Container } from "react-bootstrap";
import ChatList from "./ChatList";

export default function LeftSidebar() {
  return (
    <div>
      <Container styles={{ backgroundColor: "#FFF" }}>
        <h2>Left</h2>
        <ChatList />
      </Container>
    </div>
  );
}
