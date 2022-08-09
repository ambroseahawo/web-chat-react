import React, { useState } from 'react'
import Avatar from "../chatList/Avatar"
import ChatItem from "./ChatItem"
import "./chatContent.css";

const ChatContent = () => {
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState("")

  const onStateChange = (e) =>{
    setMessage(e.target.value)
  }

  const handleClick = () =>{
    if(message !== ""){
      const messageData = {
        key: 'id' + performance.now(),
        sender: JSON.parse(sessionStorage.getItem('currentUser')),
        msg: message,
      }
      setChat((prevChats) => [...prevChats, messageData])
      setMessage('')
    }
  }

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar isOnline="active"
              image="https://c0.wallpaperflare.com/preview/500/556/924/doberman-dog-beauty-nature.jpg"
            />
            <p>Common Chat</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat && chat.map((itm) => {
            return (
              <ChatItem
                key={itm.key}
                sender={itm.sender}
                user="me"
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={message}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={handleClick}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent