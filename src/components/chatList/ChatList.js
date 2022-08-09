import React from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItem";

const ChatList = () => {

  const allChats = [
    {
      image: "https://c0.wallpaperflare.com/preview/500/556/924/doberman-dog-beauty-nature.jpg",
      id: 1,
      name: "Group Chat",
      active: true,
      isOnline: true,
    }
  ]

  return (
    <div className="main__chatlist">
      <div className="chatlist__heading">
        <h2>Chat</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatlist__items">
        {allChats.map((item, index) => {
          return (
            <ChatListItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChatList
