import {createContext, useEffect, useRef, useState} from 'react';

// IN/OUT related to the server side logic
const ACTION_OUT_PLAYERS_UPDATED = "ACTION_OUT_PLAYERS_UPDATED";
const ACTION_IN_SET_NAME = "ACTION_IN_SET_NAME";
const ACTION_IN_NEW_CHAT_MESSAGE = "ACTION_IN_NEW_CHAT_MESSAGE";
const ACTION_OUT_NEW_CHAT_MESSAGE = "ACTION_OUT_NEW_CHAT_MESSAGE";
const ACTION_OUT_SET_PLAYER_ID = "ACTION_OUT_SET_PLAYER_ID";


const GameContext = createContext({
    playerName: "",
    playerId: "",
    setPlayerName: {},
    getPlayers: {},
    chatMessages: [],
    addNewChatMessage: {},
    connectedToServer: {},
});

export function GameContextProvider(props) {
    // TODO: default name for development process only
    const [playerName, setPlayerName] = useState("");
    const [playerId, setplayerId] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [connectedToServer, setConnectedToServer] = useState(false);
    const [allPlayers, setAllPlayers] = useState([]);

    const ws = useRef(null);

    function send(data) {
        ws.current.send(JSON.stringify(data));
    }

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");

        socket.onopen = () => setConnectedToServer(true);
        socket.onclose = () => setConnectedToServer(false);
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            switch(data.action) {
                case ACTION_OUT_SET_PLAYER_ID:
                    const playerId = data.data;
                    setplayerId(playerId);
                    break;
                case ACTION_OUT_PLAYERS_UPDATED:
                    const players = data.data;
                    setAllPlayers(players);
                    break;
                case ACTION_OUT_NEW_CHAT_MESSAGE:
                    const newMessage = data.data;

                    setChatMessages((prev) => {
                        // allow only last fresh messages to be in the chat
                        const updatedListOfMessages = [newMessage, ...prev];
                        if(updatedListOfMessages.length > 5) {
                            updatedListOfMessages.splice(5,1);
                        }
                        return updatedListOfMessages;
                    });
                default:
                    console.log("Unknown command from the server received: " + data.toString());
            }
        };

        ws.current = socket;

        return () => {
            socket.close();
        };
    }, []);

    const setPlayerNameHandler = (newPlayerName) => {
        send({action: ACTION_IN_SET_NAME, data: newPlayerName});
        setPlayerName((prev) => {
            return newPlayerName;
        });
    }

    const addNewChatMessageHandler = (message) => {
        send({action: ACTION_IN_NEW_CHAT_MESSAGE, data: message});
    }

    const context = {
        playerName: playerName,
        playerId: playerId,
        setPlayerName: setPlayerNameHandler,
        getPlayers: allPlayers,
        chatMessages: chatMessages,
        addNewChatMessage: addNewChatMessageHandler,
        connectedToServer: connectedToServer
    }

    return <GameContext.Provider value={context}>
        {props.children}
    </GameContext.Provider>
}

export default GameContext;
