import React from 'react'
import { withStyles } from "@material-ui/styles";
import DeleteButton from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './Styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
    const { classes, handleClick, name, color } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteButton className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);
