import React from "react";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import SingleRoom from "./SingleRoom";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const RoomList = () => {
  // const [isSelected, setIsSelected] = useState("");

  // const [rooms, setRooms] = useState([]);
  // const [err, setErr] = useState("");

  const URL = "http://localhost:4444";

  const selectedRoom = useSelector((state) => state.selectedRoom);
  const rooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const changeRoom = (singleroom) =>
    dispatch({ type: "SELECT_ROOM", payload: singleroom });

  return (
    <Container className="p-0 m-0">
      {rooms &&
        rooms.map((room) => (
          <Container className="singleRoom p-0 m-0">
            <Row
              className=" px-0 py-2 m-0 border-bottom"
              onClick={() => changeRoom(room)}
            >
              <Col className="p-0 m-0" xs={4}>
                <Image
                  id="singleRoom_img_small"
                  src="./monkey.jpg"
                  roundedCircle
                />
              </Col>
              <Col className="p-0 m-0 singleRoom_col_2" xs={8}>
                <p id="singleRoom_title">{room.name}</p>
              </Col>
            </Row>
          </Container>
        ))}
    </Container>
  );
};
export default RoomList;
