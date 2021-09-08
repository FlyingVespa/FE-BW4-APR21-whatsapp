import React from "react";
import { Container, Image, Button } from "react-bootstrap";
// import ChatBar from "./CenterChatInput";
// import MainTopBar from "./CenterTopBar";
import "./mainsection.css";
import SingleChat from "./SingleChat";
// import { mainReducer } from "../../Redux/reducers/reducers";
import { toggleState } from "../../Redux/actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  toggle: (toggle) => dispatch(toggleState(toggle)),
});

function CenterChat() {
  return (
    <Container className="mainchat_container p-0 g-0">
      <Button
        onClick={() => {
          toggleState(true);
        }}
      ></Button>
      <Image
        src={process.env.PUBLIC_URL + "/images/email-pattern.png"}
        alt="background"
        className="bg_image"
      />

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
