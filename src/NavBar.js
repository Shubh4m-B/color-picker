import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css'
import './NavBar.css'

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
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className="NavBar">
                <div className="NavBar-logo">
                    <a href="/">ColorPicker</a>
                </div>
                <div className="NavBar-container">
                    <span>Level : {level}</span>
                    <div className="NavBar-slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            onAfterChange={changeLevel}
                            step={100}
                        />
                    </div>
                </div>
                <div className="select-container">
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

export default NavBar
