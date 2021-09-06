import React from "react";
import { Container } from "react-bootstrap";
import ChatBar from "./ChatBar";
import MainTopBar from "./MainTopBar";

export default function CenterCh() {
  return (
    <>
      <MainTopBar />
      <Container>
        <h4>This is where the chat will show</h4>
      </Container>
      <ChatBar />
    </>
  );
}
