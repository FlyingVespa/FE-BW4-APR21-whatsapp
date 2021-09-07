import React from "react";
import { Container, Image } from "react-bootstrap";
// import ChatBar from "./CenterChatInput";
// import MainTopBar from "./CenterTopBar";
import "./mainsection.css";
import SingleChat from "./SingleChat";

export default function CenterChat() {
  return (
    <Container className="mainchat_container p-0 g-0">
      <Image
        src={process.env.PUBLIC_URL + "/images/email-pattern.png"}
        alt="background"
        className="bg_image"
      />

      {/* IMPLEMENT MAP FUNCTION ON CALLING ALL CHAT HISTORY HERE */}

      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
    </Container>
  );
}
