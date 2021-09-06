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
