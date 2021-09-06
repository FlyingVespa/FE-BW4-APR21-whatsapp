import React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import MainChat from "./MainSection/MainChat";
import { Row, Col, Container } from "react-bootstrap";

export default function () {
  return (
    <Row>
      <Col>
        <LeftSidebar xs={3} />
      </Col>
      <Col>
        <MainChat xs={6} />
      </Col>
      <Col>
        <RightSidebar xs={3} />
      </Col>
    </Row>
  );
}
