import React, {useContext} from 'react';

import classes from './LeftSidebar.module.css'
import NamePromptModal from './NamePromptModal'
import GameContext from '../store/game-context'

const LeftSidebar = () => {
    const context = useContext(GameContext);

    console.log("From App.js: " + context.playerName);

    return (
        <React.Fragment>
            {context.playerName === "" && <NamePromptModal/>}
            <div>Player: {context.playerName}</div>
        </React.Fragment>
    );
}

export default LeftSidebar;