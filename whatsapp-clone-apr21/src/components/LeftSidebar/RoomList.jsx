import React from "react";
import { Container } from "react-bootstrap";
import SingleRoom from "./SingleRoom";
import { useState, useEffect } from "react";
import uniqid from "uniqid";

const RoomList = (props) => {
  const [isSelected, setIsSelected] = useState("");
  // const [rooms, setRooms] = useState([]);
  // const [err, setErr] = useState("");

  // const URL = "http://localhost:4444";

  // const getRooms = async () => {
  //   try {
  //     const res = await fetch(`${URL}/room`);

  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log(data);
  //       setRooms(data);
  //     }
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getRooms();
  // }, []);

  return (
    <div>
      <Container className="p-0 m-0">
        {props.rooms.map((room, i) => (
          <SingleRoom key={i} room={room} />
        ))}
      </Container>
    </div>
  );
};
export default RoomList;
