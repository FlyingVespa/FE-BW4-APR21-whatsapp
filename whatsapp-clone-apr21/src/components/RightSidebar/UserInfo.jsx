import React from "react";

export default function UserInfo({ room, i }) {
  return (
    <>
      <ul>
        {room.participants[i].map(
          (r) => (
            <li>{r}</li>
          ),
          console.log("r:", room)
        )}
      </ul>
    </>
  );
}
