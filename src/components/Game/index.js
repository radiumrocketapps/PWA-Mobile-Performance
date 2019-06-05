import React, { Component } from 'react'
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 5,
      rows: 5
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="inputs-container">
          <label className="label">
            Rows:
            <input className="input" type="text" value={this.state.rows} />
          </label>
          <label className="label">
            Columns:
            <input className="input" type="text" value={this.state.columns} />
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
