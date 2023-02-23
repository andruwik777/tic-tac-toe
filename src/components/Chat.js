import React, {useContext, useRef} from 'react'
import GameContext from "../store/game-context";

const Chat = () => {
    const chatMessageRef = useRef();

    const context = useContext(GameContext);

    const sendMessageHandler = () => {
        const message = chatMessageRef.current.value;

        function sendToServer(message) {
            console.log(message);
            context.addNewChatMessage(message);
        }

        if(message.trim() !== "") {
            sendToServer(message);
            chatMessageRef.current.value = "";
        }
    }

    return (
        <React.Fragment>
            <h2>Live chat</h2>

            {context.chatMessages.map((message) => (
                <div>{message}</div>
            ))}

            {/*<label htmlFor="chat">Chat</label>*/}
            <input name="chat" id="chat" ref={chatMessageRef} type="text"/>
            <button name="send_button" id="send" onClick={sendMessageHandler}>SEND</button>
        </React.Fragment>
    );
}

export default Chat;