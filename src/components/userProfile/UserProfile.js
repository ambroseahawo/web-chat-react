import React from 'react'
import "./userProfile.css";

const UserProfile = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  const currentUserAvatar = JSON.parse(sessionStorage.getItem('currentUserAvatar')) 

  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img src={ currentUserAvatar } alt="dp" />
        </div>
        <h4>{ currentUser }</h4>
        <p>Group Member</p>
      </div>
    </div>
  )
}

export default UserProfile