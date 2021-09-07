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

const LoginPage = async ({ routerProps }) => {
  // const [inputErr, setInputErr] = useState(true);
  // const [validation, setValidation] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const URL = process.env.REACT_APP_MONGODB_URL;
  const BE_URL = "http://localhost:4545/";

  const login = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const details = {
        email: userEmail,
        password: userPassword,
      };

      const res = await fetch(`${BE_URL}/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (res.ok) {
        // setValidation(true);
        const json = await res.json();
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        localStorage.setItem("username", json.username);
        routerProps.history.push("/user");
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
            <Image src="login_logo.png"></Image>
          </Col>
          <Col xs={6}>
            <Card className="login_card">
              <h2>Sign Up</h2>
              <Form className="m-login-form">
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

                <Button
                  href="/login"
                  id="btn-login"
                  type="button"
                  xs={5}
                  onClick={login}
                >
                  LOGIN
                </Button>

                <hr class="hr-text" data-content="OR" />

                <Button
                  id="btn-reg"
                  href="/signup"
                  variant="outline-success"
                  xs={5}
                >
                  Register Up
                </Button>
              </Form>
              <br />
              <p>or</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
