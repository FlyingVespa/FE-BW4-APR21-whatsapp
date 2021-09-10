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

const Main = () => {
  const user = useSelector((s) => s.user);
  const rooms = useSelector((s) => s.rooms);
  const dispatch = useDispatch();

  // const [rooms, setRooms] = useState([]);
  const [mainUser, setMainUser] = useState(null);
  const [chatHistory, setChatHistory] = useState("");
  const [message, setMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  const getRooms = async () => {
    try {
      const res = await fetch(`${URL}/rooms/me`);
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: "STORE_ROOMS", payload: data });
        console.log(rooms);
      }
    } catch (error) {}
  };

  useEffect(() => {
    dispatch({ type: "INIT_SOCKET", payload: socket });
  }, []);

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
  // SOCKET CODE_______________________________________________
  const handleUsername = (e) => {
    e.preventDefault();
    console.log("sending username...");
    socket.emit("setUsername", { username: user.name });
  };

  const handleMessage = (e) => {
    e.preventDefault();
    if (user) {
      console.log("sending new message...");
      const newMessage = {
        message: message,
        sender: user._id,
        id: socket.id,
      };
      socket.emit("sendmessage", newMessage);
      setChatHistory([...chatHistory, newMessage]);
      setMessage("");
    }
  };

  const checkOnlineUsers = async () => {
    try {
      const response = await fetch(URL + "/users/online");
      const data = await response.json();
      setOnlineUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  // SOCKET CODE_______________________________________________
  useEffect(() => {
    getRooms();
    getMainUser();
    getAllUsers();
    getMyRooms();
    // SOCKET CODE_______________________________________________
    socket.on("connect", () => {
      console.log("Connected successfully to socket io server");
    });
    socket.on("loggedin", () => {
      console.log("Successfully logged in!");
      setLoggedin(true);
      checkOnlineUsers();
      socket.on("message", (message) => {
        console.log("a new message was received!");
        setChatHistory((chatHistory) => [...chatHistory, message]);
      });
    });

    socket.on("newConnection", () => {
      console.log("new user logged in!");
      checkOnlineUsers();
    });
    // SOCKET CODE_______________________________________________^^^^^^
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
