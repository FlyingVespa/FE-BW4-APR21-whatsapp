import React from "react";
// import { useState } from "react";
import {
  Container,
  // Card,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Image,
  // Nav,
} from "react-bootstrap";

function RegistrationPage() {
  // const [inputErr, setInputErr] = useState(false);

  // const handleChange = (event) => {
  //   const passwordRegex = new RegExp(
  //     "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  //   );
  //   setInputErr({ inputErr: !event.target.value.match(passwordRegex) });
  // };
  return (
    <>
      <Container
        className="login_container"
        styles={{ backgroundImage: `url("pattern.png")` }}
      >
        <Row>
          <Col xs={6}>
            <Image src="login_logo.png"></Image>
          </Col>
          <Col xs={6}>
            <div className="login_card">
              <h2>Sign Up</h2>
              <Form className="m-login-form">
                <FormControl
                  className="mb-2"
                  type="text"
                  placeholder="Username"
                />
                <FormControl className="mb-2" type="text" placeholder="email" />
                <FormControl
                  className="mb-2"
                  // onChange={handleChange}
                  type="password"
                  placeholder="Password"
                />
                {/* <span className={inputErr === true ? "show-error" : ""}>
                  Please make sure your password contains a letter, number and a
                  special character.
                </span> */}

                <Button href="/main" type="submit">
                  Sign Up
                </Button>
              </Form>
              <hr />
              <Button
                href="/login"
                variant="outline-success"
                id="login_link_btn"
              >
                Continue To Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegistrationPage;
