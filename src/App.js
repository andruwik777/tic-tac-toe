import React from 'react'

import './App.css';
import PlayingField from "./components/PlayingField";

function App() {

    return (
        <React.Fragment>
            <div>Hello world!</div>
            {<PlayingField/>}
        </React.Fragment>
    );
}

export default App;
