import React, {useState, useEffect} from 'react'

import Cell from './Cell'

import classes from './PlayingField.module.css'

const PlayingField = () => {

    const WIN = "WIN";

    // const cellsState = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const [cellsState, setCellState] = useState([Array(3), Array(3), Array(3)]);
    const [winCell, setWinCell] = useState();

    // cellsState[2][1] = "Olala";
    // cellsState[1][1] = "Hehe this is 11";


    useEffect(() => {
        console.log("Use effect is fired!");
        const winRow = getRandomInt(3);
        const winCol = getRandomInt(3);

        setWinCell("" + winRow + winCol);
    }, [])

    const cellClickedHandler = (row, col) => {
        console.log('cell [' + row + ',' + col +  '] is clicked');

        setCellState(prevState => {
            const text = "" + row + col == winCell ? WIN : "Try more...";

            const newState = prevState.slice();
            newState[row][col] = text;
            return newState;
        });
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return <React.Fragment>
        <div>
            <h1>Try to guess WIN cell :)</h1>
            <table>
                <tbody>
                    <tr>
                        <Cell row={0} col={0} value={cellsState[0][0]} onCellClicked={cellClickedHandler}/>
                        <Cell row={0} col={1} value={cellsState[0][1]} onCellClicked={cellClickedHandler}/>
                        <Cell row={0} col={2} value={cellsState[0][2]} onCellClicked={cellClickedHandler}/>
                    </tr>
                    <tr>
                        <Cell row={1} col={0} value={cellsState[1][0]}  onCellClicked={cellClickedHandler}/>
                        <Cell row={1} col={1} value={cellsState[1][1]} onCellClicked={cellClickedHandler}/>
                        <Cell row={1} col={2} value={cellsState[1][2]} onCellClicked={cellClickedHandler}/>
                    </tr>
                    <tr>
                        <Cell row={2} col={0} value={cellsState[2][0]} onCellClicked={cellClickedHandler}/>
                        <Cell row={2} col={1} value={cellsState[2][1]} onCellClicked={cellClickedHandler}/>
                        <Cell row={2} col={2} value={cellsState[2][2]} onCellClicked={cellClickedHandler}/>
                    </tr>
                </tbody>
            </table>

            {/*{gridItems()}*/}

            {/*<div className={classes['grid-item']}>1</div>*/}
            {/*<div className={classes['grid-item']}>2</div>*/}
            {/*<div className={classes['grid-item']}>3</div>*/}
            {/*<div className={classes['grid-item']}>4</div>*/}
            {/*<div className={classes['grid-item']}>5</div>*/}
            {/*<div className={classes['grid-item']}>6</div>*/}
            {/*<div className={classes['grid-item']}>7</div>*/}
            {/*<div className={classes['grid-item']}>8</div>*/}
            {/*<div className={classes['grid-item']}>9</div>*/}
        </div>
    </React.Fragment>
}

export default PlayingField;