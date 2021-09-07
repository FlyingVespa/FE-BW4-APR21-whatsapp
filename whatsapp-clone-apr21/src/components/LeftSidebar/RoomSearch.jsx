import React from "react";
import {
  Container,
  Col,
  FormControl,
  Form,
  Button,
  Row,
} from "react-bootstrap";
import { Reply, Search, EmojiSunglasses, P } from "react-bootstrap-icons";
export default function RoomSearch() {
  return (
    <div>
      <Container className="roomSearch p-2 g-0 ">
        <Row>
          <Col xs={3}>
            <Search />
          </Col>

          <Col xs={9}>
            <Form>
              <FormControl
                id="chatinputbar"
                placeholder="type something"
              ></FormControl>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
//  HERE TO SEARCH ALL ROOM TITLES
