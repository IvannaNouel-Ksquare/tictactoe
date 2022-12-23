import './App.css';
import { useState, useEffect } from 'react';
import History from './components/History/history';
import determineWinner from './components/Winner/determineWinner';
import Title from './components/Title/title';
import Tile from './components/Tile/tile';


function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [board, setBoard] = useState(history[history.length - 1]);
  const [isXNext, setIsXNext] = useState(true);
  const winner = determineWinner(board);

  useEffect(() => {
    setBoard(history[history.length - 1]);
  }, [history]);

  const handleOnClick = (index) => {
    const copiedHistory = [...history];
    const copiedBoard = [...board];
    if (copiedBoard[index] || winner) return;
    copiedBoard[index] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setHistory([...copiedHistory, copiedBoard]);
  }

  const handleChangeBoard = (board) => {
    setBoard(board);
  };
  
  const list = board.map((value, index) => <Tile value={value} idx={index} key={index} handleOnClick={handleOnClick} />)
  return (
    <div className="App">
      <Title winner={winner} turn={isXNext ? 'O' : 'X'} />
      <main className='Board'>
        {list}
      </main>
      <History moves={history} handleTimeTravel={handleChangeBoard} />
    </div>
  );
}

export default App;