import React from "react";
import Avatar from "./Avatar";

const ChatListItems = (props) => {
  return (
    <div style={{ animationDelay: `0.${props.animationDelay}s` }}
          className={`chatlist__item ${props.active ? props.active : ""}`}
    >
      <Avatar image={ props.image ? props.image : "http://placehold.it/80x80" }
              isOnline={props.isOnline}
      />
      <div className="userMeta">
        <p>{props.name}</p>
        <span className="activeTime">Group</span>
      </div>
    </div>
  );
}

export default ChatListItems
