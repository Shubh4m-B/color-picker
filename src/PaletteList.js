import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PaletteList extends Component {
    render() {
        const { palettes } = this.props;

        return (
            <div>
                <h1>Color Picker</h1>
                {palettes.map(palette => (
                    <p>
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    </p>
                ))}
            </div>
        )
    }
}

export default PaletteList
