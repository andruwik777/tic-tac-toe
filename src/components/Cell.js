import React, {Fragment} from "react";
import classes from "./Cell.module.css"

const Cell = (props) => {

    const id= "" + props.row + props.col;

    const clickHandler = () => {
        props.onCellClicked(props.row, props.col);
    }

    let background;
    switch(props.value) {
        case 'MISHA WIN':
            background = {backgroundColor : "lightgreen"}
            break;
        case 'Try more...':
            background = {backgroundColor : "lightpink"};
            break;
        default:
            background = {}
    }

    return <Fragment>
        <td className={classes.cell} id={id} onClick={clickHandler} style={background} >{props.value}</td>
    </Fragment>;
}

export default Cell;