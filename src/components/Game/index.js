import React, { Component } from 'react'
import './game.css'

class Game extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="inputs-container">
          <label className="label">
            Rows:
            <input className="input" type="text" />
          </label>
          <label className="label">
            Columns:
            <input className="input" type="text" />
          </label>
        </div>
        <div className="buttons-container">
          <button className="button" type="button">
            Start
          </button>
          <button className="button" type="button">
            Stop
          </button>
        </div>
        <div className="board">BOARD</div>
      </React.Fragment>
    )
  }
}

export default Game
