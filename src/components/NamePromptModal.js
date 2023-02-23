import React, {useContext, useRef} from 'react'
import GameContext from "../store/game-context";

import classes from './NamePromptModal.module.css'

const NamePromptModal = () => {
    const context = useContext(GameContext);
    const nameRef = useRef();

    const setNameHandler = () => {
        console.log("name is set to:" + nameRef.current.value);
        context.setPlayerName(nameRef.current.value);
    }

    return <React.Fragment>
        <div className={classes.backdrop}/>
        <div className={classes.name_prompt_modal}>
            <label htmlFor="my-name">My Name:</label>
            <input name="name" id="my-name" ref={nameRef} type="text"/>
            <button name="ok_button" id="ok" onClick={setNameHandler}>OK</button>

        </div>

    </React.Fragment>
}

export default NamePromptModal;