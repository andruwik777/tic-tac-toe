import React, {useEffect, useState} from 'react'

import Cell from './Cell'

import classes from './PlayingField.module.css'

const PlayingField = () => {

    const WIN = "MISHA WIN";

    // const cellsState = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const initialCellsState = [Array(3), Array(3), Array(3)];
    const [cellsState, setCellState] = useState(initialCellsState);
    const [winCell, setWinCell] = useState();

    // cellsState[2][1] = "Olala";
    // cellsState[1][1] = "Hehe this is 11";


    function setNewWinCell() {
        const winRow = getRandomInt(3);
        const winCol = getRandomInt(3);

        setWinCell("" + winRow + winCol);
    }

    const count = 10000000;

    function getPercentage(a) {
        return (a / (count / 100)).toFixed(2);
    }

    const checkRndFunction = () => {
        let a = 0;
        let b = 0;
        let c = 0;

        for (let i = 0; i < count; i++) {

            const randomInt = getRandomInt(3);
            if (randomInt === 0) {
                ++a;
            } else if (randomInt === 1) {
                ++b;
            } else {
                ++c;
            }
        }

        console.log('a:' + getPercentage(a) + '    b:' + getPercentage(b) + '    c' + getPercentage(c));
    }

    useEffect(() => {
        console.log("Use effect is fired!");

        // checkRndFunction();

        setNewWinCell();
    }, [])

    const cellClickedHandler = (row, col) => {
        console.log('cell [' + row + ',' + col + '] is clicked');

        setCellState(prevState => {
            const text = "" + row + col == winCell ? WIN : "Try more...";

            const newState = prevState.slice();
            newState[row][col] = text;
            return newState;
        });
    }

    const startNewGameHandler = () => {
        setCellState(initialCellsState);
        setNewWinCell();
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return <React.Fragment>
        <div className={classes.playingField}>
            <h1>Try to guess WIN cell :)</h1>
            <button className={classes.button} onClick={startNewGameHandler}>Start new game</button>
            <table>
                <tbody>
                    <tr>
                        <Cell row={0} col={0} value={cellsState[0][0]} onCellClicked={cellClickedHandler}/>
                        <Cell row={0} col={1} value={cellsState[0][1]} onCellClicked={cellClickedHandler}/>
                        <Cell row={0} col={2} value={cellsState[0][2]} onCellClicked={cellClickedHandler}/>
                    </tr>
                    <tr>
                        <Cell row={1} col={0} value={cellsState[1][0]} onCellClicked={cellClickedHandler}/>
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