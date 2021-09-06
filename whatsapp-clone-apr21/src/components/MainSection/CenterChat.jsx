import React from "react";
import { Container, Image } from "react-bootstrap";
import ChatBar from "./CenterChatInput";
import MainTopBar from "./CenterTopBar";
import "./mainsection.css";
import SingleChat from "./SingleChat";

export default function CenterChat() {
  return (
    <Container className="mainchat_container p-0 g-0">
      <Image id="mainchat_background" src="/images/email-pattern.png" />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
    </Container>
  );
}
