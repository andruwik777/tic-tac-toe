import React, {Fragment} from "react";
import classes from "./Cell.module.css"

const Cell = (props) => {

    const id= "" + props.row + props.col;

    const clickHandler = () => {
        props.onCellClicked(props.row, props.col);
    }

    return <Fragment>
        <td className={classes.cell} id={id} onClick={clickHandler}>{props.value}</td>
    </Fragment>;
}

export default Cell;