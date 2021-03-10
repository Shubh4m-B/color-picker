import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import {generatePalette} from './ColorHelper';
import './App.css'

export class App extends Component {
  render() {
    console.log(generatePalette(seedColors[7]));
    return (
      <div className="App">
        <Palette {...seedColors[7]}/>
      </div>
    )
  }
}

export default App
