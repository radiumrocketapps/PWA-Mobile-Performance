import React, { Component } from 'react'
import Cell from './cell'
import styled from 'styled-components'

const UlBoard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #ccc;
  border-style: solid;
  border-width: 2px;
  border-color: #999;
  height: ${props => props.height};
  width: ${props => props.width};
`
class Board extends Component {
  showCells = () => {
    const { columnsRows } = this.props
    let list = []
    for (let i = 0; i < columnsRows * columnsRows; i++) {
      list.push(i)
    }

    return list.map((item, index) => {
      return <Cell key={index} number={item} />
    })
  }
  render() {
    const height = this.props.style.height + 'px'
    const width = this.props.style.width + 'px'
    return (
      <UlBoard height={height} width={width}>
        {this.showCells()}
      </UlBoard>
    )
  }
}

export default Board
