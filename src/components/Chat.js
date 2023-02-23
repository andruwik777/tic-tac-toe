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

        if (message.trim() !== "") {
            sendToServer(message);
            chatMessageRef.current.value = "";
        }
    }

    return (
        <React.Fragment>
            <h3>Live chat</h3>

            <ul>
                {context.chatMessages.map((message) => {
                    const colored = message.playerId === context.playerId ? {color: "green"} : {color: "blue"};
                    return (
                        <li key={message.id}>
                            <span style={colored}>{message.playerName}:</span>
                            <span>{message.chatMessageText}</span>
                        </li>
                    );
                })}
            </ul>

            {/*<label htmlFor="chat">Chat</label>*/}
            <input name="chat" id="chat" ref={chatMessageRef} type="text"/>
            <button name="send_button" id="send" onClick={sendMessageHandler}>SEND</button>
        </React.Fragment>
    );
}

export default Chat;