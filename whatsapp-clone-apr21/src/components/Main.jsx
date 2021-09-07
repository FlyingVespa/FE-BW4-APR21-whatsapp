import React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import CenterSection from "./MainSection/CenterSection";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useState } from "react";

const Main = () => {
  const [showRightbar, setShowRightbar] = useState(false);

  return (
    <Container className="mainpage_container">
      <Button
        onClick={() => {
          setShowRightbar(true);
        }}
      >
        Show Right
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          setShowRightbar(false);
        }}
      >
        Close Right
      </Button>
      <Row>
        {!showRightbar ? (
          <>
            <Col className="p-0" xs={3}>
              <LeftSidebar />
            </Col>
            <Col className="p-0" xs={9}>
              <CenterSection />
            </Col>
          </>
        ) : (
          <>
            <Col className="p-0" xs={3}>
              <LeftSidebar />
            </Col>
            <Col className="p-0" xs={6}>
              <CenterSection />
            </Col>
            <Col className="p-0" xs={3}>
              <RightSidebar />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Main;
