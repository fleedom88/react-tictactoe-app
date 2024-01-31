import React, { useState} from 'react'
import Square from './Square'
import './Board.css'

const Board = () =>{
    const [squares,setSquares] = useState(Array(9).fill(null));

    const handleClick = () => {
      const newSquares = squares.slice(); //생성자의 state
      newSquares[i] = 'X';
      setSquares(newSquares);
    }

    const renderSquare = (i) =>{
        return <Square value={this.state.squares[i]} 
        onClick={()=> handleClick(i)} />        
    }
 
    return (
      <div>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
        </div>
        <div className='board-row'>
            {renderSquare(4)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
        </div>
        <div className='board-row'>
            {renderSquare(7)}
            {renderSquare(8)}
            {renderSquare(9)}
        </div>
      </div>
    )
  
}

export default Board;