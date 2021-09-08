import React from "react";
import { Container, Button } from "react-bootstrap";

function LoginTest() {
  return (
    <>
      <Container>
        <h1>WELCOME</h1>
        <Button href="/signup">REGSITER NOW</Button>
        <Button href="/login">LOGIN</Button>
      </Container>
    </>
  );
}
export default LoginTest;
