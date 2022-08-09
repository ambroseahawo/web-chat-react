import React from 'react'
import ChatList from "../chatList/ChatList"
import ChatContent from '../chatContent/ChatContent';
import "./chatBody.css";

const ChatBody = () => {
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
    </div>
  )
}

export default ChatBody