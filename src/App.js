import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page'
import seedColors from './seedColors'
import { generatePalette } from './ColorHelper';
// import './App.css'

export class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors
    }
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    })
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    )
  }

  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    )
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={500} key={location.key}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={(routeProps) =>
                  <Page>
                    <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} seedColors={seedColors} />
                  </Page>}
              />
              <Route
                exact
                path="/"
                render={(routeProps) =>
                  <Page>
                    <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />
                  </Page>}
              />
              <Route
                exact
                path="/palette/:id"
                render={routeProps => (
                  <Page>
                    <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <Page>
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                    />
                  </Page>
                )}
              />
              <Route
                render={(routeProps) =>
                  <Page>
                    <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />
                  </Page>}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    )
  }
}

export default App
