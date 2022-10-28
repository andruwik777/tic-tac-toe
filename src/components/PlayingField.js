import React from 'react'

import classes from './PlayingField.module.css'

const PlayingField = () => {
    // const gridItems = () => {
    //     const numbers = Array(9).keys();
    //     const arrayOfNumbers = [...numbers];
    //     let a = arrayOfNumbers.map(n => <div className={classes['grid-item']}>{n}</div>);
    //     return a;
    // }
    //
    // const getColumns = (row) => {
    //     return row.map(el => {
    //         console.log('creating columns from ' + row );
    //         return <td>{el}</td>;
    //     })
    // }
    //
    // const arr1 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    //
    // const tableItems = (arr) => {
    //     return arr.map(row => {
    //         console.log('processing ' + [...row]);
    //         return
    //         <tr>
    //             {getColumns([...row])}
    //         </tr>
    //         ;});
    // };

    return <React.Fragment>
        <div>
            {console.log('here body')}
            {/*<table>*/}
            {/*    <tbody>*/}
            {/*        /!*{tableItems(arr1)}*!/*/}
            {/*        {console.log('here body')}*/}
            {/*    </tbody>*/}
            {/*</table>*/}

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