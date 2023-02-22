import React from 'react'

import './App.css';
import PlayingField from "./components/PlayingField";
import NamePromptModal from "./components/NamePromptModal"

function App() {

    return (
        <React.Fragment>
            <NamePromptModal/>
            <PlayingField/>
        </React.Fragment>
    );
}

export default App;
