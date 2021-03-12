import React, { Component } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from 'chroma-js';

import './ColorBox.css'

export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopySate = this.changeCopySate.bind(this);
    }

    changeCopySate() {
        this.setState({
            copied: true
        }, () => {
            setTimeout(() => this.setState({
                copied: false
            }), 1500);
        })
    }
    render() {
        const { name, background, url, showLink } = this.props;
        const { copied } = this.state;

        const isDarkColor = chroma(background).luminance() < 0.075;
        const isLightColor = chroma(background).luminance() >= 0.075;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopySate}>
                <div style={{ background: background }} className="ColorBox">
                    <div className={`ColorBox-overlay ${copied && "show"}`} style={{ background: background }}></div>
                    <div className={`ColorBox-copymsg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p className={isLightColor && "dark-text"}>{background}</p>
                    </div>
                    <div className="ColorBox-copy-container">
                        <div className="Colorbox-content">
                            <span className={isDarkColor && "light-text"}>{name}</span>
                        </div>
                        <button className={`ColorBox-copyButton ${isLightColor && "dark-text"}`}>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={url} onClick={e => e.stopPropagation()}>
                            <span className={`ColorBox-more ${isLightColor && "dark-text"}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox
