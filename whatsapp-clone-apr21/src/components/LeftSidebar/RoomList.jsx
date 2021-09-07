import React from "react";
import { Container } from "react-bootstrap";
import SingleRoom from "./SingleRoom";

export default function RoomList() {
  return (
    <div>
      <Container className="p-0 m-0">
        <SingleRoom />
        <SingleRoom />
        <SingleRoom />
        <SingleRoom />
      </Container>
    </div>
  );
}
