import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import Snackbar from '@material-ui/core/Snackbar';
// import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from "@material-ui/styles";
import styles from './Styles/NavBarStyles'
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css'

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value);
    }
    render() {
        const { level, changeLevel, showingAllColors, classes } = this.props;
        const { format } = this.state;
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
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">Hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,0.5)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default withStyles(styles)(NavBar)
