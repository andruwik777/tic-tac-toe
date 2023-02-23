import React, {useContext} from "react";
import NamePromptModal from "./NamePromptModal";
import classes from "./PlayerName.module.css";
import GameContext from "../store/game-context";

const PlayerName = () => {
    const context = useContext(GameContext);
    return (
        <React.Fragment>
            {context.playerName === "" && <NamePromptModal/>}
            <h2 className={classes.name}>Your name: {context.playerName}</h2>
        </React.Fragment>
    );
}

export default PlayerName;