import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Square(props) {
  const [value, setValue] = useState(null)
  return (
    <button className="square" onClick={() => setValue("X")}>
      {value || props.value}
    </button>
  )
}

function Board() {
  const status = "Next player: X"
  const [squares, setSquares] = useState(new Array(9).fill(null))

  function renderSquare(num) {
    return <Square value={num}></Square>
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare("O")}
        {renderSquare("O")}
        {renderSquare("O")}
      </div>
      <div className="board-row">
        {renderSquare("O")}
        {renderSquare("O")}
        {renderSquare("O")}
      </div>
      <div className="board-row">
        {renderSquare("O")}
        {renderSquare("O")}
        {renderSquare("O")}
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

export default Game;
