import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from "@material-ui/styles";
import styles from './Styles/NavBarStyles'
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css'

function NavBar(props) {

    const [format, setFormat] = React.useState("hex");
    const [open, setOpen] = React.useState(false);

    const handleChange = (e) => {
        // this.setState({ format: e.target.value });
        setFormat(e.target.value);
        props.handleChange(e.target.value);
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const { level, changeLevel, showingAllColors, classes } = props;
    // const { format } = this.state;
    return (
        <header className={classes.NavBar}>
            <div className={classes.NavBarLogo}>
                <Link to="/color-picker">ColorPicker</Link>
            </div>
            {showingAllColors && (<div>
                <span>Level : {level}</span>
                <div className={classes.NavBarSlider}>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        onAfterChange={changeLevel}
                        step={100}
                    />
                </div>
            </div>
            )}
            <div className={classes.selectContainer}>
                <Select value={format} onChange={handleChange}>
                    <MenuItem value="hex">Hex - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,0.5)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                autoHideDuration={2000}
                message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={handleClose}
                action={[
                    <IconButton onClick={handleClose} color="inherit" key="close" aria-label="close">
                        <CloseIcon></CloseIcon>
                    </IconButton>
                ]}
            >
            </Snackbar>
        </header>
    )
}

export default withStyles(styles)(NavBar)
