import React from "react";
import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Paperclip, EmojiSunglasses, Reply } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import "./mainsection.css";

export default function CenterChatInput() {
  // need to send / emit messages here
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const rooms = useSelector((s) => s.rooms);
  const socket = useSelector((s) => s.socket);

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState("");
  const [sender, setSender] = useState("");

  // const sendMessage = (e) => {
  //   e.preventDefault();

  //   if (user) {
  //     setChatHistory(rooms);
  //     console.log("sending new message...");
  //     const newMessage = {
  //       message: message,
  //       sender: user._id,
  //       id: socket.id,
  //     };
  //     socket.emit("sendmessage", newMessage);
  //     dispatch({
  //       type: "PUSH_MESSAGE",
  //       payload: { ...chatHistory, newMessage },
  //     });
  //   }
  // };

  // const sendMessage = () => {
  //   dispatch({ type: "PUSH_MESSAGE", { message, sender: storeUserId }})
  // }
  return (
    <Container className="chatinput_container p-2 g-0 ">
      <Form>
        <Row>
          <Col xs={1}>
            <EmojiSunglasses />
          </Col>
          <Col xs={1}>
            <Paperclip />
          </Col>
          <Col xs={9}>
            <FormControl
              id="chatinputbar"
              placeholder="type something"
            ></FormControl>
          </Col>
          <Col xs={1}>
            <Button type="submit">
              <Reply onClick={() => console.log("click")} />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
