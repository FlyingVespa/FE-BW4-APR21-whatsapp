import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function CenterTopBar() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((s) => s.sidebarOpen);
  const activeRoom = useSelector((s) => s.selectedRoom);

  const showSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR", payload: !sidebarOpen });
  };

  return (
    <Container className="p-0 g-0 centerchat_top">
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto" id="showright" onClick={showSidebar}>
          <Navbar.Brand>
            <Image
              alt=""
              src="./logo_wa.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />
            {activeRoom?.name}
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

// THE ROOM NAME NEEDS TO BE DISPLAYED HERE AS WELL AS ALL PARTICIPANTS
