import React, {useContext}  from 'react'

import './App.css';
import PlayingField from "./components/PlayingField";
import NamePromptModal from "./components/NamePromptModal"
import GameContext from "./store/game-context";

function App() {
    const context = useContext(GameContext);

    console.log("From App.js: " + context.playerName);

    return (
        <React.Fragment>
            {context.playerName === "" && <NamePromptModal/>}
            <PlayingField/>
        </React.Fragment>
    );
}

export default App;
