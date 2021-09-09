import React from "react";
import { Container } from "react-bootstrap";
import SingleRoom from "./SingleRoom";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";

const RoomList = () => {
  // const [isSelected, setIsSelected] = useState("");

  // const [rooms, setRooms] = useState([]);
  // const [err, setErr] = useState("");

  const URL = "http://localhost:4444";

  const selectedRoom = useSelector((state) => state.selectedRoom);
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const changeRoom = (roomId) =>
    dispatch({ type: "CHANGE_ROOM", payload: roomId });

  return (
    <Container className="p-0 m-0">
      {rooms &&
        rooms.map((room, i) => (
          <SingleRoom
            key={i}
            room={room}
            onClick={() => changeRoom(room._id)}
          />
        ))}
    </Container>
  );
};
export default RoomList;
