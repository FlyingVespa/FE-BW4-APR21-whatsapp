import React from "react";
import { Container } from "react-bootstrap";
import CenterChat from "./CenterChat";
import CenterChatInput from "./CenterChatInput";
import CenterTopBar from "./CenterTopBar";
import "./mainsection.css";
import { Image } from "react-bootstrap";

export default function CenterSection() {
  return (
    <Container className="centersection_container p-0 m-0 g-0">
      <CenterTopBar />
      <CenterChat />
      <CenterChatInput />
    </Container>
  );
}
