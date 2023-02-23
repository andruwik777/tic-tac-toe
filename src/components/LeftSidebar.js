import React, {useContext} from 'react';

import classes from './LeftSidebar.module.css'
import NamePromptModal from './NamePromptModal'
import GameContext from '../store/game-context'

const LeftSidebar = () => {
    const context = useContext(GameContext);

    console.log("From App.js: " + context.playerName);

    return (
        <div className={classes.sidenav}>
            {context.playerName === "" && <NamePromptModal/>}
            <div>Player: {context.playerName}</div>
            <div>Player: {context.playerName}</div>
            <div>Player: {context.playerName}</div>
            <div>Player: {context.playerName}</div>
            <div>Player: {context.playerName}</div>
            <div>Player: {context.playerName}</div>
            <div>Player: {context.playerName}</div>
            <div>Player: {context.playerName}</div>

        </div>
    );
}

export default LeftSidebar;