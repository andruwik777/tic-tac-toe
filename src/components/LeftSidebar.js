import React, {useContext} from 'react';

import classes from './LeftSidebar.module.css'
import NamePromptModal from './NamePromptModal'
import GameContext from '../store/game-context'
import Chat from "./Chat";

const LeftSidebar = () => {
    const context = useContext(GameContext);

    console.log("From App.js: " + context.playerName);

    return (
        <div className={classes.sidenav}>
            {context.playerName === "" && <NamePromptModal/>}
            <h2 className={classes.name}>Your name: {context.playerName}</h2>
            <Chat/>
        </div>
    );
}

export default LeftSidebar;