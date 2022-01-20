import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function Board() {
  const [squares, setSquares] = useState(new Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const status = `Next player: ${xIsNext ? "X" : "O"}`

  function hundleClick(i) {
    const changedSquares = squares.slice();
    changedSquares[i] = xIsNext ? "X" : "O"

    setXIsNext(!xIsNext)
    setSquares(changedSquares)
  }

  function renderSquare(num) {
    return <Square value={squares[num]} onClick={() => hundleClick(num)}></Square>
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game () {
  return (
        <div className="game">
      <div className="game-board">
        {Board()}
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

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
export default Game;
