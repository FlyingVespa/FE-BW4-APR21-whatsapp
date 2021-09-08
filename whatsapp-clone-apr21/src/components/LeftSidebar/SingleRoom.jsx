import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./leftsidebar.css";

export default function SingleRoom({ room }) {
  return (
    <Container className="singleRoom p-0 m-0">
      <Row className=" px-0 py-2 m-0 border-bottom">
        <Col className="p-0 m-0" xs={4}>
          <Image id="singleRoom_img_small" src="./monkey.jpg" roundedCircle />
        </Col>
        <Col className="p-0 m-0 singleRoom_col_2" xs={8}>
          {console.log("single:", room)}
          {/* <span id="singleRoom_title">{room.name}</span> */}
          <span id="singleRoom_title">{room?.name}</span>
        </Col>
      </Row>
    </Container>
  );
}
