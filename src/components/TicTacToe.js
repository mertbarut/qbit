import React, { useState } from "react";

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
      <button className='bg-slate-200 border-none text-xs text-black' onClick={onClick}>
        {value}
      </button>
    )
}

const Board = ({squares, onClick}) => (
  <div className="border-solid border-black bg-emerald-200 w-10 h-10 grid grid-cols-3 grid-rows-3 gap-1">
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
  const x0 = xIsNext ? "X" : "O"

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1)
    const current = historyPoint[stepNumber]
    const squares = [...current]

    if (winner || squares[i]) return;
    squares[i] = x0
    setHistory([...historyPoint, squares])
    setStepNumber(historyPoint.length)
    setXisNext(!xIsNext)
  }

  return (
    <div className="p-0 m-0 box-border">
      <h1 className="text-center">Tic! Tac! Toe!</h1>
      <Board
        squares={history[stepNumber]}
        onClick={handleClick}
      />
      <div className="flex justify-between">
        <h3>{winner ? "Winner: " + winner : "Next Player: " + x0}</h3>
      </div>
    </div>
  )
}

export default Game