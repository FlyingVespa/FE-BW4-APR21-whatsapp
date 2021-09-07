import React from "react";
import {
  Col,
  Container,
  Image,
  Row,
  OverlayTrigger,
  Button,
  Tooltip,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { PencilFill, ArrowLeft } from "react-bootstrap-icons";
import "./leftsidebar.css";
import RoomSearch from "./RoomSearch";
import RoomList from "./RoomList";

function MainUser() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click To Change Picture
    </Tooltip>
  );

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [user, setuser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const URL = "http://locahost:4444";

  return (
    <>
      {!showProfile ? (
        <Container className="p-0">
          <Container className="p-0">
            <Image
              id="mainuser_profile_img_sml"
              src="./monkey.jpg"
              roundedCircle
              onClick={() => setShowProfile(true)}
            />
          </Container>

          <RoomSearch />
          <RoomList />
        </Container>
      ) : (
        <Container className="p-0">
          <Container className="mainuser_profile m-0">
            <Row>
              <Col>
                <ArrowLeft
                  id="arrow_icon"
                  onClick={() => {
                    setShowProfile(false);
                  }}
                />
              </Col>
              <Col className="">
                <h5>PROFILE</h5>
              </Col>
            </Row>
          </Container>
          <Container className="p-2">
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 40 }}
              overlay={renderTooltip}
            >
              <Image
                className="user_profile_img mt-2"
                src="./monkey.jpg"
                roundedCircle
              />
            </OverlayTrigger>
          </Container>
          <Container className="mainuser_name ">
            <p id="mainuser">Your Name</p>
            <Row>
              <Col>
                <p className="text-center m-1 pt-2">User Name</p>
              </Col>
              <Col>
                <PencilFill />
              </Col>
            </Row>
          </Container>
          <p className="text-muted p-3">
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </p>
          <Container className="mainuser_about">
            <p id="mainuser">About</p>
            <Row>
              <Col>
                <p className="text-center m-0 p-0">This is the status</p>
              </Col>
              <Col>
                <PencilFill />
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
}

export default MainUser;
// THE LOGGED IN USER SHOULD BE DISPLAYED HERE
// TO SHOW PICTURE
// UPLOAD CHANGE PICTURE
// UPDATE ADD STATUS OF USER
