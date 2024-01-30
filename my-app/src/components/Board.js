import React, { Component } from 'react'
import Square from './Square'
import './Board.css'

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state={
          squares:Array(9).fill(null) //Square.js의 state가져옴
        }
    }

    handleClick(i){
      const squares = this.state.squares.slice(); //생성자의 state
      squares[i] = 'X';
      this.setState({squares:squares});
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} 
        onClick={()=> this.handleClick(i)} />        
    }


  render() {
    return (
      <div>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
        </div>
        <div className='board-row'>
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
        </div>
        <div className='board-row'>
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}
