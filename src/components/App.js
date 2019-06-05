import React, { Component } from 'react'
import Game from './Game'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Conways Game of Life - PWA</h1>
        <Game />
      </div>
    )
  }
}

export default App
