import React, {useContext} from "react";
import NamePromptModal from "./NamePromptModal";
import classes from "./PlayerName.module.css";
import GameContext from "../store/game-context";

const PlayerName = () => {
    const context = useContext(GameContext);

    function setNameHandler() {
        const playerName = prompt("Set new name:");
        context.setPlayerName(playerName);
    }

    return (
        <React.Fragment>
            {/*{context.playerName === "" && <NamePromptModal/>}*/}
            <h2 className={classes.name} onClick={setNameHandler}>Your name: {context.playerName}</h2>
        </React.Fragment>
    );
}

export default PlayerName;