import React from "react";
import "./style.css";

export default function Snap(props) {
  const { name, message, time } = props.comment;

  return (
    <div className="body">
      <div className="snap-message">
        <h3 className="name-and-message">snaps to {name} for {message}
          <br></br>
          <h6 className="time">{time}</h6>
        </h3>
      </div>
    </div>
  );
}