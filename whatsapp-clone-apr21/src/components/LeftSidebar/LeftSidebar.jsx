import React from "react";
import { useState } from "react";
import {
  Container,
  Tooltip,
  Col,
  Row,
  InputGroup,
  FormControl,
  Image,
  OverlayTrigger,
  Button,
} from "react-bootstrap";

import RoomSearch from "./RoomSearch";
import RoomList from "./RoomList";
import AddRoom from "./AddRoom";
import "./leftsidebar.css";
import { ArrowLeft, PencilFill } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftSidebar = (props) => {
  const renderTooltip = (p) => (
    <Tooltip id="button-tooltip" {...p}>
      Click To Change Picture
    </Tooltip>
  );

  const [selected, setSelected] = useState("");
  const history = useHistory();
  const user = useSelector((s) => s.user);
  const selectedRoom = useSelector((s) => s.selectedRoom);
  const [showProfile, setShowProfile] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const URL = "http://locahost:4444";

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
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
      window.alert("Could not delete");
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
      <Col className="p-0" xs={3}>
        <Container className="leftsidebar_container p-0">
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
              <RoomList mainUser={user} />
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
                    src={user.avatar}
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
                    <p className="text-center m-1 pt-2">{user.username}</p>
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
                    <p className="text-center m-0 p-0">{user.email}</p>
                  </Col>
                  <Col>
                    <PencilFill />
                  </Col>
                </Row>
              </Container>
              <p className="text-muted p-3">
                This is not your username or pin. This name will be visible to
                your WhatsApp contacts.
              </p>
              <Container className="mainuser_about">
                <p id="mainuser">About</p>
                <Row>
                  <Col>
                    <p className="text-center m-0 p-0">{user.status}</p>
                  </Col>
                  <Col>
                    <PencilFill />
                  </Col>
                </Row>
              </Container>
              <Button
                variant="danger"
                onClick={(e) => {
                  if (window.confirm("Are u sure?")) {
                    deleteAccount();
                  }
                }}
              >
                DELETE ACCOUNT
              </Button>
            </Container>
          )}
        </Container>
      </Col>
    </>
  );
};
// USER PROFILE NEEDS TO POP UP HERE WITH TERNARY STATEMENT IF CLICKED TO OPEN USER INFO TAB
export default LeftSidebar;
