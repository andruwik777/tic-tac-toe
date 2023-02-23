import React, {useContext} from "react";
import GameContext from "../store/game-context";

const Players = () => {
    const context = useContext(GameContext);

    return (
        <React.Fragment>
            <h3>Players</h3>
            <ul>
                {context.getPlayers.map((player) => {
                    return (
                        <li key={player.playerId}>
                            <div>{player.playerName}</div>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
}

export default Players;