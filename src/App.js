import { useState, useRef } from 'react';
import Home from './components/Home';
import Questions from './components/Questions/Questions';

const App = () => {
  // variables
  const [isGameStarted, setIsGameStarted] = useState(false);
  const API = useRef('https://opentdb.com/api.php?amount=5');

  // functions
  const playGame = () => setIsGameStarted(true);
  const restartGame = () => setIsGameStarted(false);

  const setQuery = code => {
    if (code == 'any') return;
    const URL = `https://opentdb.com/api.php?amount=5&category=${code}`;
    API.current = URL;
  };

  return (
    <>
      {isGameStarted ? (
        <Questions api={API.current} restartGame={restartGame} />
      ) : (
        <Home playGame={playGame} setQuery={setQuery} />
      )}
    </>
  );
};

export default App;
