import React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import CenterSection from "./MainSection/CenterSection";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { io } from "socket.io-client";

const URL = process.env.REACT_APP_API_URL || "http://localhost:4444";
const socket = io(URL, { transports: ["websocket"] });

const Main = (props) => {
  const history = useHistory();
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();

  const [rooms, setRooms] = useState([]);
  const [mainUser, setMainUser] = useState(null);

  const getRooms = async () => {
    try {
      const res = await fetch(`${URL}/rooms/me`);
      if (res.ok) {
        const data = await res.json();
        setRooms(data);
      }
    } catch (error) {}
  };

  const getMainUser = async () => {
    try {
      const res = await fetch(`${URL}/users/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("user:", data);
        dispatch({ type: "SET_USER", payload: data });
        localStorage.setItem("USER_ID", data._id);
        socket.emit("login", { userId: data._id });
      }
    } catch (error) {}
  };

  const getAllUsers = async () => {
    try {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log("AllUSERS:", data);
        // dispatch({ type: "SET_USER", payload: data });
      }
    } catch (error) {}
  };

  const getMyRooms = async () => {
    try {
      const res = await fetch(`${URL}/rooms/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log("ROOMS", data);
        dispatch({ type: "STORE_ROOMS", payload: data });
      }
    } catch (error) {}
  };

  useEffect(() => {
    getRooms();
    getMainUser();
    getAllUsers();
    getMyRooms();
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected successfully to socket io server");
    });
  }, []);

  return (
    <Container className="mainpage_container">
      <Row>
        <LeftSidebar mainUser={mainUser} />
        <CenterSection rooms={rooms} mainUser={mainUser} r />
        <RightSidebar />
      </Row>
    </Container>
  );
};

export default Main;
