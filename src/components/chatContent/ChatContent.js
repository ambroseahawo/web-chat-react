import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createMessage, getMessages } from "../../globalState/actions/chat";
import Avatar from "../chatList/Avatar"
import ChatItem from "./ChatItem"
import "./chatContent.css";

const ChatContent = () => {
  // const [chat, setChat] = useState([])
  const [message, setMessage] = useState("")

  const chat = useSelector((state) => state.Chat)
  const messagesEndRef = useRef(null)
  const dispatch = useDispatch()
  const currentUserId = JSON.parse(sessionStorage.getItem('currentUserId'))
  const currentUserAvatar = JSON.parse(sessionStorage.getItem('currentUserAvatar'))

  useEffect(() => {
    dispatch(getMessages())
    
    const onStorageUpdate = () => {
      dispatch(getMessages())
    }

    window.addEventListener("storage", onStorageUpdate)

    return () => {
      window.removeEventListener("storage", onStorageUpdate)
    }
  }, [dispatch])

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() =>{
    scrollToBottom()
  })

  const onStateChange = (e) =>{
    setMessage(e.target.value)
  }

  const handleSendMessage = () =>{
    if(message !== ""){
      const messageData = {
        key: 'id' + performance.now(),
        sender: JSON.parse(sessionStorage.getItem('currentUser')),
        senderId: currentUserId,
        msg: message,
        image: currentUserAvatar
      }
      // setChat((prevChats) => [...prevChats, messageData])
      dispatch(createMessage(messageData))
      dispatch(getMessages())
      setMessage('')
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      handleSendMessage()
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
                user={itm.senderId === currentUserId ? "me" : "other"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={ messagesEndRef } />
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
            onKeyDown={handleKeyDown}
            value={message}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={handleSendMessage}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent