import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

export default function CenterTopBar() {
  return (
    <Container className="p-0 g-0">
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Navbar.Brand href="/signup">
            <Image
              alt=""
              src="./logo_wa.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />
            Room Name
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link className="logout_link mx-3" href="/signup">
            LOGOUT
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}
