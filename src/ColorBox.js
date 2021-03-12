import React, { Component } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom"


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
        const { name, background } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopySate}>
                <div style={{ background: background }} className="ColorBox">
                    <div className={`ColorBox-overlay ${copied && "show"}`} style={{ background: background }}></div>
                    <div className={`ColorBox-copymsg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="ColorBox-copy-container">
                        <div className="Colorbox-content">
                            <span>{name}</span>
                        </div>
                        <button className="ColorBox-copyButton">Copy</button>
                    </div>
                    <Link to="/" onClick={e => e.stopPropagation()}>
                        <span className="ColorBox-more">More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox
