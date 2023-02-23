import React, {useContext}  from 'react'

import './App.css';
import PlayingField from "./components/PlayingField";
import LeftSidebar from "./components/LeftSidebar";

function App() {
    return (
        <React.Fragment>
            <LeftSidebar/>
            <PlayingField/>
        </React.Fragment>
    );
}

export default App;
