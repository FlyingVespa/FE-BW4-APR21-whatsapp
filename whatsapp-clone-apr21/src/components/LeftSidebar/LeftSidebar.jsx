import React from "react";
import { Container } from "react-bootstrap";
import MainUser from "./MainUser";
import "./leftsidebar.css";

const LeftSidebar = (props) => {
  return (
    <>
      <Container className="leftsidebar_container p-0">
        <MainUser rooms={props.rooms} mainUser={props.mainUser} />
      </Container>
    </>
  );
};
// USER PROFILE NEEDS TO POP UP HERE WITH TERNARY STATEMENT IF CLICKED TO OPEN USER INFO TAB
export default LeftSidebar;
