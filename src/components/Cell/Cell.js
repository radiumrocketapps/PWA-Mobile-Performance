import React from 'react'
import './Cell.css'

class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  handleClick = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state
    return (
      <div className={active ? "activeCell" : "cell"} onClick={this.handleClick}>
        {this.props.number}
      </div>
    )
  } 
}

export default Cell
