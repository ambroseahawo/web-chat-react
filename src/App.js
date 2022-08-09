import React from 'react'
import Nav from './components/nav/Nav'
import ChatBody from './components/chatBody/ChatBody'
import "./App.css"

const App = () => {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  )
}

export default App