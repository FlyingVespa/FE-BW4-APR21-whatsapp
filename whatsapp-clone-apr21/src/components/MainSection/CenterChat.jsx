import React from "react";
import { Container, Image, Button } from "react-bootstrap";
// import ChatBar from "./CenterChatInput";
// import MainTopBar from "./CenterTopBar";
import "./mainsection.css";
import SingleChat from "./SingleChat";
// import { mainReducer } from "../../Redux/reducers/reducers";
import { toggleState } from "../../Redux/actions/actions";
import { connect } from "react-redux";
// import pattern from "./img/email-pattern.png";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  toggle: (toggle) => dispatch(toggleState(toggle)),
});

function CenterChat() {
  return (
    <Container
      className="mainchat_container p-0 g-0"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
        backgroudRepeat: "repeat",
      }}
    >
      {/* IMPLEMENT MAP FUNCTION ON CALLING ALL CHAT HISTORY HERE */}

      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterChat);
