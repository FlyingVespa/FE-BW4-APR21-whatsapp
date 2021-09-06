import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function MainTopBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/signup">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React Bootstrap
          </Navbar.Brand>
          <Nav.Link href="/signup">SIGNUP</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}
