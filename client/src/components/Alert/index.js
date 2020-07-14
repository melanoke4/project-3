import React from "react";
import "./style.css";

function Alert() {
  return (
      <div className="msg-row">
        <a href="/courses" className="msg-text"><i className="fa fa-exclamation-circle" id="icon"></i><strong>New Course Coming Soon: Bootstrap</strong></a>
      </div>
  );
}

export default Alert;
