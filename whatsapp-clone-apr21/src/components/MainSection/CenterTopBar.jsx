import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

export default function CenterTopBar() {
  return (
    <Container className="p-0 g-0">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/signup">
          <Image
            alt=""
            src="./logo_wa.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          React Bootstrap
        </Navbar.Brand>
        <Nav.Link href="/signup">SIGNUP</Nav.Link>
      </Navbar>
    </Container>
  );
}
