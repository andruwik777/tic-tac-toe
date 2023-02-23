import {createContext, useState} from 'react';

const GameContext = createContext({
    playerName: "",
    setPlayerName: {}
});

export function GameContextProvider(props) {
    // TODO: default name for development process only
    const [playerName, setPlayerName1] = useState("Andrii");

    const setPlayerNameHandler = (newPlayerName) => {
        setPlayerName1((prev) => {
            return newPlayerName;
        })
    }

    const context = {
        playerName: playerName,
        setPlayerName: setPlayerNameHandler
    }

    return <GameContext.Provider value={context}>
        {props.children}
    </GameContext.Provider>
}

export default GameContext;
