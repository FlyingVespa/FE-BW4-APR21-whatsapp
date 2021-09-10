import React from "react";
import { Container, Image, Button, Card } from "react-bootstrap";
import "./mainsection.css";
// import SingleChat from "./SingleChat";
import { toggleState } from "../../Redux/actions/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

function CenterChat() {
  const activeRoom = useSelector((s) => s.selectedRoom);
  return (
    <Container
      className="mainchat_container p-0 g-0"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
        backgroudRepeat: "repeat",
      }}
    >
      {
        activeRoom && <span>{activeRoom.chatHistory[0]?.message}</span>
        //     activeRoom.chatHistory.map((c) => {
        //       <Container className="singlechat_container px-5 py-1">
        //         <Card style={{ width: "18rem" }}>
        //           <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //               {c?._id}
        //               Some quick example text to build on the card title and make up
        //               the bulk of the card's content.
        //             </Card.Text>
        //           </Card.Body>
        //         </Card>
        //       </Container>;
      }
    </Container>
  );
}

export default CenterChat;
