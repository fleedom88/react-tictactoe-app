import React, { useState} from 'react'
import Square from './Square.js'
import './Board.css'

const Board = () =>{
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [isX,setIsX] = useState(true);
    const calculateWinner = (squares)=>{
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index];
        if (squares[a] && squares[a] === squares[b] &&squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;              
    }

    const winner = calculateWinner(squares);
    let status ='';

    if (winner) {
      status = 'Winner: ' + winner;
    }
    else{
      status = `Next Player : ${isX?'X':'O'}`;
    }

    const handleClick = (i) => {
      const newSquares = squares.slice(); //생성자의 state     
      if(calculateWinner(newSquares) || newSquares[i]){
        return;
      }
      newSquares[i] = isX ? 'X':'O';
      setSquares(newSquares);
      // isX?setIsX(false):setIsX(true);
      setIsX(!isX);
      // setIsX(prev => !prev);
      
    }

    const renderSquare = (i) =>{
        return <Square value={squares[i]} 
        onClick={()=> handleClick(i)} />        
    }
    
    const clearSquares=()=>{
      setSquares(Array(9).fill(null));
    }

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        <br/>
        <button onClick={clearSquares}>clear</button>
      </div>
    )
  
}

export default Board;