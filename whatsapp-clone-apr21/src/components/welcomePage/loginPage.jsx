import React from "react";
import { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Image,
} from "react-bootstrap";

function LoginPage({ routerProps }) {
  const [inputErr, setInputErr] = useState(true);
  const [validation, setValidation] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const URL = process.env.REACT_APP_MONGODB_URL;
  const BE_URL = "http://localhost:4444";

  const login = async (event) => {
    event.preventDefault();

    try {
      const details = {
        email: userEmail,
        password: userPassword,
      };

      const res = await fetch(`${BE_URL}/auth/login`, {
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
        // localStorage.setItem("refreshToken", json.refreshToken);
        // localStorage.setItem("username", json.username);
        routerProps.history.push("/main");
      } else {
        // setValidation(false);
        // alert("Credentials are incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (event) => {
  //   const passwordRegex = new RegExp(
  //     "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  //   );
  //   setInputErr({ inputErr: !event.target.value.match(passwordRegex) });
  // };
  return (
    <>
      <Container className="login_container">
        <Row>
          <Col xs={6}>
            <Image src="login_logo.png" />
          </Col>
          <Col xs={6}>
            <Card className="login_card">
              <h2>Login9</h2>
              <Form onSubmit={login}>
                <FormControl
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="text"
                  placeholder="Email Address"
                />
                <FormControl
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
                <FormControl.Feedback type="invalid">
                  Please enter your password.
                </FormControl.Feedback>
                {/* <span className={inputErr === true ? "show-error" : ""}>
                  Please make sure your password contains a letter, number and a
                  special character.
                </span> */}
                <Button id="btn-login" type="submit" xs={5}>
                  LOGIN
                </Button>
                <Button
                  id="btn-reg"
                  href="/signup"
                  variant="outline-success"
                  xs={5}
                >
                  Register For Account
                </Button>
                <br />
                <button
                  onClick={() =>
                    console.log(localStorage.getItem("accessToken"))
                  }
                >
                  show token
                </button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
