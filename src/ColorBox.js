import React, { Component } from 'react'

import './ColorBox.css'

export class ColorBox extends Component {
    render() {
        const {name, background} = this.props;
        return (
            <div style={{background: background}} className="ColorBox">
                <div className="ColorBox-copy-container">
                    <div className="Colorbox-content">
                        <span>{name}</span>
                    </div>
                    <button className="ColorBox-copyButton">Copy</button>
                </div>
                <span className="ColorBox-more">More</span>
            </div>
        )
    }
}

export default ColorBox
