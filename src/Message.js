import React from 'react'
import "./Message.css";
import { Avatar } from "@material-ui/core";
import "react-redux";
function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <p>Message</p>
                <h4>
                <span className="message__timestamp">Timestamp</span>
                </h4>
            </div>
        </div>
    )
}

export default Message
