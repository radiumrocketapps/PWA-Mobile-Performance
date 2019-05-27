import React from 'react'
import Cell from './Cell'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnsRows: 0,
    }
  }

  handleClick = () => {
    // do something
  }
  
  handleChange = (e) => {
    e.persist()
    console.log(e)
    this.setState({ columnsRows:e.target.value })
  }
  
  showCells = () => {
    const { columnsRows } = this.state
    let list = []
    for (let i = 0; i < columnsRows; i++) {
      list.push(i)
      console.log(list)
    }
  
    return list.map((item, index) => {
      return <Cell key={index} number={item}/>
    })
  }

  render () {
    return (
      <div className="container">
        <div className="board">
          { this.showCells() }
        </div>
        <div>
          <button onClick={this.handleClick} className="play">Play</button>
        </div>
        <div>
          <input type="number" onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default App
