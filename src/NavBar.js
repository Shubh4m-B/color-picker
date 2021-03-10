import React, { Component } from 'react'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'
import './NavBar.css'

export class NavBar extends Component {
    render() {
        const { level, changeLevel } = this.props;
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
            </header>
        )
    }
}

export default NavBar
