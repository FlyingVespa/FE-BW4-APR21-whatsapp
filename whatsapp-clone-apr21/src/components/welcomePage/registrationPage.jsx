import React from "react";
import { useState } from "react";
import {
  Container,
  // Card,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Image,
  InputGroup,
  // Nav,
} from "react-bootstrap";

function RegistrationPage({ routerProps }) {
  const [inputErr, setInputErr] = useState(false);
  const [validation, setValidation] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const URL = "http://localhost:4444";
  const register = async (e) => {
    e.preventDefault();
    try {
      const details = {
        email: userEmail,
        password: userPassword,
        username: userName,
        avatar: userAvatar,
      };

      const res = await fetch(`${URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details), // { details: { email: "hello", password: "pasword" } }
      });
      if (res.ok) {
        // setValidation(true);
        const json = await res.json();
        console.log(json);
        localStorage.setItem("accessToken", json.accessToken);
        routerProps.history.push("/login");
      } else {
        setValidation(false);
        alert("Credentials are incorrect");
      }
    } catch (error) {}
  };
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
            <Image src="login_logo.png" />
          </Col>
          <Col xs={6}>
            <div className="login_card">
              <h2>Sign Up</h2>
              <Form className="m-login-form" onSubmit={register}>
                <FormControl
                  className="mb-2"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <FormControl
                  className="mb-2"
                  type="text"
                  placeholder="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <FormControl
                  className="mb-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <InputGroup>
                  <FormControl
                    className="mb-2"
                    type="file"
                    placeholder="Choose File"
                    onChange={(e) => setUserAvatar(URL + e.target.value)}
                  />
                </InputGroup>
                <Button type="submit">Sign Up</Button>
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
