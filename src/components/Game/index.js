import React, { Component } from 'react'
import Cell from './Cell'
import Board from './boardLogic'
import './game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 5,
      rows: 5,
      gameRunning: false,
      interval: 100,
      board: new Board()
    }
  }

  handleRowChange = event => {
    if (!this.state.gameRunning) {
      this.setState({
        rows: event.target.value
      })
    }
  }

  handleColumnChange = event => {
    if (!this.state.gameRunning) {
      this.setState({
        columns: event.target.value
      })
    }
  }

  renderBoard = () => {
    var newBoard = []
    var cellRow = []
    for (var i = 0; i < this.state.rows; i++) {
      for (var j = 0; j < this.state.columns; j++) {
        if (this.state.board.isCellAlive(i + ' , ' + j)) {
          cellRow.push(
            <Cell
              key={[i, j]}
              position={{ x: i, y: j }}
              live={true}
              storeCell={this.storeCell.bind(this)}
            />
          )
        } else {
          cellRow.push(
            <Cell
              key={[i, j]}
              position={{ x: i, y: j }}
              live={false}
              storeCell={this.storeCell.bind(this)}
            />
          )
        }
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
            () => this.runGame(),
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

  runGame = () => {
    this.setState({
      board: this.state.board.addBoard()
    })
  }

  storeCell = position => {
    if (!this.state.gameRunning) {
      this.setState({
        board: this.state.board.storeCell(position)
      })
    }
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
