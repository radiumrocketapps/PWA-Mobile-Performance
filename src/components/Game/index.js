import React, { Component } from 'react'
import Cell from './Cell'
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 5,
      rows: 5,
      gameRunning: false,
      interval: 100
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

  renderBoard = () => {
    var newBoard = []
    var cellRow = []
    for (var i = 0; i < this.state.rows; i++) {
      for (var j = 0; j < this.state.columns; j++) {
        cellRow.push(<Cell key={[i, j]} />)
      }
      newBoard.push(
        <div className="row" key={i}>
          {cellRow}
        </div>
      )
      cellRow = []
    }
    return newBoard
  }

  handleStart = () => {
    if (!this.state.gameRunning) {
      this.setState(
        {
          gameRunning: true
        },
        () => {
          this.intervalRef = setInterval(
            () => console.log('Run Game Function'),
            this.state.interval
          )
        }
      )
    }
  }

  handleStop = () => {
    this.setState(
      {
        gameRunning: false
      },
      () => {
        if (this.intervalRef) {
          clearInterval(this.intervalRef)
        }
      }
    )
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
          <button className="button" type="button" onClick={this.handleStart}>
            Start
          </button>
          <button className="button" type="button" onClick={this.handleStop}>
            Stop
          </button>
        </div>
        <div className="board">{this.renderBoard()}</div>
      </React.Fragment>
    )
  }
}

export default Game
