import React from "react";
import "./style.css";

function Avatar(props) {
  return (
      <div className="avatar-container">
          <a href="/profile" className=" avatar"  style={{backgroundImage:`URL(${props.image})`}}>
              Profile
            </a>
      </div>
  );
}

export default Avatar;
