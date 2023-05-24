import { useState } from 'react';
import './App.css';
import { WinnerModal } from './components/WinnerModal';
import confetti from 'canvas-confetti';
import { checkWinner, checkEndGame } from './assets/utils/logic';

import { TURNOS } from './constants';
import { Tablero } from './components/Tablero';
import { Turnos } from './components/Turnos';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNOS.X;
  });
  // null no hay ganador, false empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNOS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

    const newTurn = turn === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurn(newTurn);

    //guardo aqui la partida. Tengo nuevo turno

    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
  };

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <Tablero board={board} updateBoard={updateBoard} />
      <Turnos turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
