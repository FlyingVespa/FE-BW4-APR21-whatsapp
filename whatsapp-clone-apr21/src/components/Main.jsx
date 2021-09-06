import React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import CenterSection from "./MainSection/CenterSection";
import { Row, Col, Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container className="mainpage_container">
      <Row>
        <Col className="p-0" xs={3}>
          <LeftSidebar />
        </Col>
        <Col className="p-0" xs={6}>
          <CenterSection />
        </Col>
        <Col className="p-0" xs={3}>
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  );
};
export default Main;
