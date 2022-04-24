import React, { useState } from "react";
import PropTypes from 'prop-types';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Square = ({value, onClick}) => {
    return (
      <button className={`bg-slate-200 border-none text-xs text-black ${value === 'X' ? 'bg-emerald-300' : (value === 'O' ? 'bg-purple-300': 'bg-white') }`} onClick={onClick}>
        {value}
      </button>
    )
}

const Board = ({squares, onClick}) => (
  <div className="border-2 border-purple-300 border-solid bg-purple-200 w-20 h-20 grid grid-cols-3 grid-rows-3 gap-1">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
)

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(history[stepNumber])
  const x = xIsNext ? "X" : "X"
  const o = !xIsNext ? "O" : "O"

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1)
    const current = historyPoint[stepNumber]
    const squares = [...current]
    const prevMoveX = squares.indexOf('X')
    const prevMoveO = squares.indexOf('O')

    if (winner || squares[i]) return;

    if (stepNumber === 0) {
      squares[i] = x
      if (i !== 4) {
        squares[4] = o
      } else {
        let q0 = Math.floor(Math.random() * 10)
        while (squares[q0] !== null || q0 === 1 || q0 === 3 || q0 === 5 || q0 === 7) {
          q0 = Math.floor(Math.random() * 10)
        }
        squares[q0] = o
      }
    } else if (stepNumber === 1 && prevMoveO === 4) {
      squares[i] = x
      let diff = Math.abs(prevMoveX - i)
      if (prevMoveX === 0) { // 2nd move of X commencing
        if (diff === 1 || diff === 3 || diff === 5 || diff === 7 || diff === 8) { 
          squares[2] = o
          squares[6] = o
          console.log('TEST')
        } else if (diff === 2 || diff === 6) {
          squares[1] = o
          squares[7] = o
        } 
      } else if (prevMoveX === 1) {
        if (diff === 1 || diff === 8) { 
          squares[3] = o
          squares[5] = o
        } else if (diff === 2 || diff === 4 || diff === 6 || diff === 7) {
          squares[0] = o
          squares[8] = o
        }
      } else if (prevMoveX === 2) {
        if (diff === 1 || diff === 5) { 
          squares[0] = o
          squares[8] = o
        } else if (diff === 2 || diff === 3 || diff === 4 || diff === 6) {
          squares[1] = o
          squares[7] = o
        }
      } else if (prevMoveX === 3) {
        if (diff === 3 || diff === 1) { 
          squares[1] = o
          squares[7] = o
        } else if (diff === 2 || diff === 4 || diff === 5) {
          squares[2] = o
          squares[6] = o
        }
      } else if (prevMoveX === 5) {
        if (diff === 5|| diff === 3 || diff == 1) { 
          squares[1] = o
          squares[7] = o
        } else if (diff === 4 || diff === 2) {
          squares[2] = o
          squares[6] = o
        }
      } else if (prevMoveX === 6) {
        if (diff === 3 || diff === 6 || diff === 2 ) { 
          squares[1] = o
          squares[7] = o
        } else if (diff === 1 || diff === 4 || diff === 5) {
          squares[0] = o
          squares[8] = o
        }
      } else if (prevMoveX === 7) {
        if (diff === 1 || diff === 5 || diff === 6 ) { 
          squares[3] = o
          squares[5] = o
        } else if (diff === 2 || diff === 4 || diff === 7) {
          squares[2] = o
          squares[6] = o
        }
      } else if (prevMoveX === 8) {
        if (diff === 1 || diff === 2 || diff === 5 || diff === 7) { 
          squares[3] = o
          squares[5] = o
        } else if (diff === 3 || diff === 5 || diff === 6 || diff === 8) {
          squares[1] = o
          squares[7] = o
        }
      }
      let q0 = Math.floor(Math.random() * 10)
      while (squares[q0] !== null) {
        q0 = Math.floor(Math.random() * 10)
      }
      squares[q0] = o
    } else if (stepNumber === 1 && prevMoveO !== 4) {
      squares[i] = x
      if (prevMoveO === 0) {
        if (i === 1 || i === 4 || i === 7 || i === 8 || i === 5 || i === 8) {
          squares[3] = o
          squares[6] = o
        } else if (i === 3 || i === 6) {
          squares[1] = o
          squares[2] = o
        }
      } else if (prevMoveO === 2) {
        if (i === 3 || i === 5 || i === 6 || i === 7 || i === 8) {
          squares[0] = o
          squares[1] = o
        } else if (i === 0 || i === 1) {
          squares[5] = o
          squares[8] = o
        }
      } else if (prevMoveO === 6) {
        if (i === 1 || i === 2 || i === 5 || i === 7 || i === 8) {
          squares[0] = o
          squares[3] = o
        } else if (i === 0 || i === 3) {
          squares[7] = o
          squares[8] = o
        }
      } else if (prevMoveO === 8) {
        if (i === 0 || i === 1 || i === 3 || i === 6 || i === 7) {
          squares[2] = o
          squares[5] = o
        } else if (i === 2 || i === 5) {
          squares[6] = o
          squares[7] = o
        }
      }
      let q0 = Math.floor(Math.random() * 10)
      while (squares[q0] !== null) {
        q0 = Math.floor(Math.random() * 10)
      }
      squares[q0] = o
    }
    setHistory([...historyPoint, squares])
    setStepNumber(historyPoint.length)
    setXisNext(!xIsNext)
  }

  return (
    <div className="p-0 m-0 box-border items-center">
      <Board
        squares={history[stepNumber]}
        onClick={handleClick}
      />
      <div >
        <h3 className="text-center text-xs py-3" >{winner ? "You Lost in Two Steps" : "Click on a tile to play"}</h3>
      </div>
    </div>
  )
}

export default Game