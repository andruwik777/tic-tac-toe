import {createContext, useState} from 'react';

const GameContext = createContext({
    playerName: "",
    setPlayerName: {},
    chatMessages: [],
    addNewChatMessage: {}
});

export function GameContextProvider(props) {
    // TODO: default name for development process only
    const [playerName, setPlayerName] = useState("Andrii");
    const [chatMessages, setChatMessages] = useState([]);

    const setPlayerNameHandler = (newPlayerName) => {
        setPlayerName((prev) => {
            return newPlayerName;
        })
    }

    const addNewChatMessageHandler = (message) => {
        setChatMessages((prev) => {
            // allow only last fresh messages to be in the chat
            const updatedListOfMessages = [message, ...prev];
            if(updatedListOfMessages.length > 5) {
                updatedListOfMessages.splice(5,1);
            }
            return updatedListOfMessages;
        })
    }

    const context = {
        playerName: playerName,
        setPlayerName: setPlayerNameHandler,
        chatMessages: chatMessages,
        addNewChatMessage: addNewChatMessageHandler
    }

    return <GameContext.Provider value={context}>
        {props.children}
    </GameContext.Provider>
}

export default GameContext;
