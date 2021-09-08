import React from "react";
import { Container, Image, Button } from "react-bootstrap";
// import ChatBar from "./CenterChatInput";
// import MainTopBar from "./CenterTopBar";
import "./mainsection.css";
import SingleChat from "./SingleChat";
// import { mainReducer } from "../../Redux/reducers/reducers";
import { toggleState } from "../../Redux/actions/actions";
import { connect } from "react-redux";
import { useState } from "react";
// import pattern from "./img/email-pattern.png";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  toggle: (toggle) => dispatch(toggleState(toggle)),
});

function CenterChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const getChats = async () => {
    const URL = "http://locahost:4444";
    try {
      const res = await fetch(`${URL}/rooms/me`);

      if (res.ok) {
        const data = await res.json();
        console.log("chats", data);
        setChatHistory(data);
      }
    } catch (error) {}
  };
  return (
    <Container
      className="mainchat_container p-0 g-0"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
        backgroudRepeat: "repeat",
      }}
    >
      {chatHistory &&
        chatHistory.map((room, i) => {
          <SingleChat room={room} key={i} />;
        })}
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterChat);
