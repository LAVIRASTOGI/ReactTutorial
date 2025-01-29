import React, { useState } from "react";
import "./style.css";

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [isturn, setIsTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState({
    message: "",
    turn: "X",
    winningPattern: [],
  });

  const clickHandlder = (index) => {
    if (gameBoard[index] || gameStatus.message) return;
    let newGameBoard = [...gameBoard];
    newGameBoard[index] = isturn ? "X" : "O";
    setGameBoard(newGameBoard);
    setIsTurn(!isturn);
    winnerPlay(isturn, newGameBoard);
  };

  const winnerPlay = (isturn, currentGame) => {
    let moveStatus = {
      message: "draw",
      turn: isturn ? "X" : "O",
      winningPattern: [],
    };

    for (let winMove of winPatterns) {
      const [a, b, c] = winMove;
      if (currentGame[a] && currentGame[b] && currentGame[c]) {
        if (
          currentGame[a] === currentGame[b] &&
          currentGame[b] === currentGame[c]
        ) {
          moveStatus = {
            ...moveStatus,
            message: "Winner",
            winningPattern: [a, b, c],
          };
          break;
        }
      }
    }

    if (moveStatus.message !== "Winner") {
      if (currentGame.includes(null)) {
        setGameStatus({ ...moveStatus, message: "" });
        return;
      } else {
        setGameStatus({
          ...moveStatus,
          message: "Draw",
        });
      }
    }
    setGameStatus(moveStatus);
  };

  const resetGame = () => {
    setGameBoard(Array(9).fill(null));
    setIsTurn(true);
    setGameStatus({
      message: "",
      turn: "X",
      winningPattern: [],
    });
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="gridContainer">
        {gameBoard.map((ele, index) => (
          <button
            key={index}
            className={`cell ${
              gameStatus.winningPattern.includes(index) ? "winner" : ""
            }`}
            onClick={() => clickHandlder(index)}
          >
            <span className={ele === "X" ? "x-mark" : "o-mark"}>{ele}</span>
          </button>
        ))}
      </div>

      {gameStatus?.message && (
        <div className="winnerContainer">
          <h2>
            {gameStatus?.message === "Winner" ? (
              <>{gameStatus.turn} is the Winner!</>
            ) : (
              "Game is Draw!"
            )}
          </h2>
        </div>
      )}

      <button className="buttonRestart" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
