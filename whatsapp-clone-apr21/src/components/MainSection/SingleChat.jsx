import React from "react";
import { Container, Card, Button } from "react-bootstrap";
export default function SingleChat() {
  return (
    <Container className="singlechat_container px-5 py-1">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="pattern.png" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
