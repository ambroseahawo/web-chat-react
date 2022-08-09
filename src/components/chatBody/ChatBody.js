import React from 'react'
import ChatList from "../chatList/ChatList"
import ChatContent from '../chatContent/ChatContent';
import "./chatBody.css";
import UserProfile from '../userProfile/UserProfile';

const ChatBody = () => {
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  )
}

export default ChatBody