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

  handleRowChange = event => {
    this.setState({
      rows: event.target.value
    })
  }

  handleColumnChange = event => {
    this.setState({
      columns: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="inputs-container">
          <label className="label">
            Rows:
            <input
              className="input"
              type="text"
              value={this.state.rows}
              onChange={this.handleRowChange}
            />
          </label>
          <label className="label">
            Columns:
            <input
              className="input"
              type="text"
              value={this.state.columns}
              onChange={this.handleColumnChange}
            />
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
