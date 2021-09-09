import React from "react";
import { Col, Container } from "react-bootstrap";
import CenterChat from "./CenterChat";
import CenterChatInput from "./CenterChatInput";
import CenterTopBar from "./CenterTopBar";
import { useSelector } from "react-redux";
import "./mainsection.css";
import { Image } from "react-bootstrap";

export default function CenterSection() {
  const sidebarOpen = useSelector((state) => state.sidebarOpen);
  const xs = sidebarOpen ? 6 : 9;

  return (
    <Col className="p-0" xs={xs}>
      <Container className="centersection_container p-0 m-0 g-0">
        <CenterTopBar />
        <CenterChat />
        <CenterChatInput />
      </Container>
    </Col>
  );
}
