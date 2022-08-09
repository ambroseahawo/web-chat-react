import React from "react";
import Avatar from "../chatList/Avatar";

const ChatItem = (props) => {
  return (
    <div style={{ animationDelay: `0.5` }}
      className={`chat__item ${props.user}`}
    >
      <div className="chat__item__content">
        <div className="chat__meta">
          <span style={{ textTransform: "capitalize" }}>{props.sender}</span>
        </div>
        <div className="chat__msg">{props.msg}</div>
      </div>
      <Avatar isOnline="active" image={props.image} />
    </div>
  );
}

export default ChatItem