import React, {useRef} from 'react'

import classes from './NamePromptModal.module.css'

const NamePromptModal = () => {

    const nameRef = useRef();

    let setNameHandler = () => {
        console.log("name is set to:" + nameRef.current.value);
    }

    return <React.Fragment>
        <label htmlFor="my-name">My Name:</label>
        <input name="name" id="my-name" ref={nameRef} type="text" />
        <button name="ok_button" id="ok" onClick={setNameHandler}>OK</button>
    </React.Fragment>
}

export default NamePromptModal;