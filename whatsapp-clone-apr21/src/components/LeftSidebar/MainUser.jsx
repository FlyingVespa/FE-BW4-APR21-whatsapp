import React, { useEffect } from "react";
import {
  Col,
  Container,
  Image,
  Row,
  OverlayTrigger,
  Tooltip,
  FormControl,
  FormGroup,
  InputGroup,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { PencilFill, ArrowLeft } from "react-bootstrap-icons";
import "./leftsidebar.css";
import RoomSearch from "./RoomSearch";
import RoomList from "./RoomList";
import AddRoom from "./AddRoom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MainUser = (props) => {
  const renderTooltip = (p) => (
    <Tooltip id="button-tooltip" {...p}>
      Click To Change Picture
    </Tooltip>
  );

  const history = useHistory();

  // const [selectedRoom, setSelectedRoom] = useState(null);

  const user = useSelector((s) => s.user);
  const selectedRoom = useSelector((s) => s.selectedRoom);

  const [showProfile, setShowProfile] = useState(false);
  const [delTask, setDelTask] = useState(false);

  const [avatar, setAvatar] = useState(null);
  const URL = "http://locahost:4444";

  // UPLOADING A PIC
  const deleteAccount = async () => {
    try {
      const res = await fetch(`${URL}/users/me`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        console.log("Account Delted");
        props.routerProps.history.push("/login");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfilePic = async () => {
    try {
      if (avatar) {
        console.log(avatar);
        let formData = new FormData();
        formData.append("avatar", avatar);
        const res = await fetch(`${URL}/users/me/upload`, {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: formData,
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const updateMainUser = async () => {
  //   const details = {
  //     email: props.userMain.email,
  //     username: props.userMain.username,
  //     avatar: props.userMain.avatar,
  //   };
  //   try {
  //     const res = await fetch(`${URL}/users/me`, {
  //       method: "POST",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //       body: JSON.stringify(details),
  //     });
  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log("user:", data);
  //       //setMainUser(data);
  //     }
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   updateMainUser();
  // }, []);

  return (
    <>
      {!showProfile ? (
        <Container className="p-0">
          <Container className="p-0">
            <Row>
              <Col>
                <Image
                  id="mainuser_profile_img_sml"
                  src="./monkey.jpg"
                  roundedCircle
                  onClick={() => setShowProfile(true)}
                />
              </Col>
              <Col>
                <h3 id="mainUser_name">{user?.username}</h3>
              </Col>
              <Col>
                <AddRoom />
              </Col>
            </Row>
          </Container>

          <RoomSearch />
          {user && <RoomList rooms={props.rooms} mainUser={user} />}
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

            <InputGroup className="mt-3">
              <FormControl
                onChange={(e) => setAvatar(e.target.files[0])}
                type="file"
              />
              <Button
                variant="outline-secondary"
                onClick={() => {
                  updateProfilePic();
                  console.log("upload clicked");
                }}
              >
                Upload
              </Button>
            </InputGroup>
          </Container>
          <Container className="mainuser_name ">
            <p id="mainuser">Your Name</p>
            <Row>
              <Col>
                <p className="text-center m-1 pt-2">
                  {props.mainUser.username}
                </p>
              </Col>
              <Col>
                <PencilFill />
              </Col>
            </Row>
          </Container>
          <Container className="mainuser_about">
            <p id="mainuser">Email</p>
            <Row>
              <Col>
                <p className="text-center m-0 p-0">{props.mainUser.email}</p>
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
                <p className="text-center m-0 p-0">{props.mainUser.status}</p>
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
};

export default MainUser;
// THE LOGGED IN USER SHOULD BE DISPLAYED HERE
// TO SHOW PICTURE
// UPLOAD CHANGE PICTURE
// UPDATE ADD STATUS OF USER
