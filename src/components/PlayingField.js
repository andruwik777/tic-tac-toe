import React from 'react'

import classes from './PlayingField.module.css'

const PlayingField = () => {
    const arr1 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

    return <React.Fragment>
        <div>
            <table className={classes.table}>
                <tbody>
                    <tr id={0}>
                        <td  id={0}>0</td>
                        <td  id={1}>1</td>
                        <td  id={2}>2</td>
                    </tr>
                    <tr id={1}>
                        <td  id={0}>0</td>
                        <td  id={1}>1</td>
                        <td  id={2}>2</td>
                    </tr>
                    <tr id={2}>
                        <td  id={0}>0</td>
                        <td  id={1}>1</td>
                        <td  id={2}>2</td>
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