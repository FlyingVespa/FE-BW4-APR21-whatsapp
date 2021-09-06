import React from "react";
import { Form, FormControl, Container, Row, Col } from "react-bootstrap";
import { Paperclip, EmojiSunglasses, Reply } from "react-bootstrap-icons";

import "./mainsection.css";

export default function CenterChatInput() {
  return (
    <Container className="chatinput_container p-2 g-0 ">
      <Row>
        <Col xs={1}>
          <EmojiSunglasses />
        </Col>
        <Col xs={1}>
          <Paperclip />
        </Col>
        <Col xs={9}>
          <Form>
            <FormControl
              id="chatinputbar"
              placeholder="type something"
            ></FormControl>
          </Form>
        </Col>
        <Col xs={1}>
          <Reply />
        </Col>
      </Row>
    </Container>
  );
}
