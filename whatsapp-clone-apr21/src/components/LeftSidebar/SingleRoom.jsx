import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./leftsidebar.css";

export default function SingleRoom() {
  return (
    <Container className="singleRoom p-0 m-0">
      <Row className=" px-0 py-2 m-0 border-bottom">
        <Col className="p-0 m-0" xs={4}>
          <Image id="singleRoom_img_small" src="./monkey.jpg" roundedCircle />
        </Col>
        <Col className="p-0 m-0 singleRoom_col_2" xs={8}>
          <span id="singleRoom_title">ROOM</span>
        </Col>
      </Row>
    </Container>
  );
}
