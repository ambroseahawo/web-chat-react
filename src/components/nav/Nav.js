import React from 'react'
import logo from "../../assets/images/logo.png"

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__blocks">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav__blocks"></div>
      <div className="nav__blocks"></div>
    </div>
  )
}

export default Nav