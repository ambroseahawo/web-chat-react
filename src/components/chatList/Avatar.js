import React from 'react'

const Avatar = (props) => {
    return (
        <div className="avatar">
            <div className="avatar-img">
                <img src={props.image} alt="avatar-logo" />
            </div>
            <span className="isOnline"></span>
            <span className={`isOnline ${props.isOnline}`}></span>
        </div>
    )
}

export default Avatar