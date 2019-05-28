import React, { Component } from 'react'
import './Cell.css'

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  handleClick = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state
    return (
      <li
        className={active ? 'activeCell' : 'cell'}
        onClick={this.handleClick}
      />
    )
  }
}

export default Cell
