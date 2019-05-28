import React, { Component } from 'react'
import Board from './board'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnsRows: 0,
      style: {
        height: 0,
        width: 0
      }
    }
  }
  handleChange = e => {
    this.setState({
      columnsRows: e.target.value,
      style: {
        height: e.target.value * 26,
        width: e.target.value * 26
      }
    })
  }
  handleClick = () => {
    console.log('Do something')
  }
  render() {
    return (
      <React.Fragment>
        <Board columnsRows={this.state.columnsRows} style={this.state.style} />
        <div>
          <button onClick={this.handleClick} className="play">
            Play
          </button>
        </div>
        <div>
          <input type="number" onChange={this.handleChange} />
        </div>
      </React.Fragment>
    )
  }
}

export default Game
