import React from 'react'
import "./Chat.css"
import ChatHeader from "./ChatHeader.js"
import AddCircleIcon from "@material-ui/icons/AddCircle";
function Chat() {
    return (
        <div>
            <ChatHeader />
        </div>

        <div className="chat__input">
            <AddCircleIcon fontSize="large" />
        </div>

        <form action="">
            Message #TESTCHANNEL
            <button className="chat__inputButton" type="submit">Send Message</button>
        </form>

        <div className="chat__inputIcons">
            <CardGiftcardIcon fontSize="large" />
            <GifIcon fontSize="large" />
            <EmojiEmotionsIcon fontSize="large" />
        </div>
    )
}

export default Chat
