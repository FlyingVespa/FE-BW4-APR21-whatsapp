import React from "react";
import { Container } from "react-bootstrap";
import SingleRoom from "./SingleRoom";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import { useDispatch, useSelector } from "react-redux";

const RoomList = (props) => {
  // const [isSelected, setIsSelected] = useState("");

  const [rooms, setRooms] = useState([]);
  // const [err, setErr] = useState("");

  const URL = "http://localhost:4444";

  const getMyRooms = async () => {
    try {
      const res = await fetch(`${URL}/rooms/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setRooms(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getMyRooms();
  }, []);

  const selectedRoom = useSelector((state) => state.selectedRoom);
  const dispatch = useDispatch();
  const changeRoom = (roomId) =>
    dispatch({ type: "CHANGE_ROOM", payload: roomId });

  console.log(props.rooms);
  return (
    <div>
      <Container className="p-0 m-0">
        {rooms.map((room, i) => {
          //
          <SingleRoom
            key={i}
            room={room}
            onClick={() => changeRoom(room._id)}
          />;
          // room.participants < 0
          //   ? console.log(room.participants._id)
          //   : console.log("empyt");

          // room.participants.filter(props.mainUser._id) ? (
          // ) : (
          //   <p>Currently in No Rooms</p>
          // )
        })}
      </Container>
    </div>
  );
};
export default RoomList;
