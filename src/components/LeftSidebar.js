import React, {useContext} from 'react';

import classes from './LeftSidebar.module.css'
import GameContext from '../store/game-context'
import Chat from "./Chat";
import Players from "./Players";
import PlayerName from "./PlayerName";

const LeftSidebar = () => {
    const context = useContext(GameContext);

    console.log("From App.js: " + context.playerName);

    return (
        <div className={classes.sidenav}>
            <PlayerName/>
            <Players/>
            <Chat/>
        </div>
    );
}

export default LeftSidebar;