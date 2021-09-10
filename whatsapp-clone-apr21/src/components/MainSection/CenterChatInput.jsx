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

import "./mainsection.css";

export default function CenterChatInput() {
  // need to send / emit messages here
  const sendMessage = (e) => e.preventDefault;
  // const sendMessage = () => {
  //   dispatch({ type: "PUSH_MESSAGE", { message, sender: storeUserId }})
  // }
  return (
    <Container className="chatinput_container p-2 g-0 ">
      <Form onSubmit={sendMessage}>
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
