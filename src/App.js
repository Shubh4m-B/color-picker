import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './ColorHelper';
import './App.css'

export class App extends Component {
  render() {
    console.log(generatePalette(seedColors[7]))
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>PAlette!!</h1>} />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[7])} />
      // </div>
    )
  }
}

export default App
