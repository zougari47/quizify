import React from 'react';
import Quiz from './Quiz';
import Home from './Home';

export default function App() {
  const [quizStart, setQuizStart] = React.useState(false);
  const [questions, setQuestions] = React.useState('');
  const [result, setResult] = React.useState(0);

  // get the data from the api
  React.useEffect(() => {
    if (!quizStart) {
      fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((info) => info.json())
        .then((data) => setQuestions(data.results));
    }
  }, [quizStart]);

  function checkAnswers(correctArr) {
    let result = 0;
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');
    allRadioButtons.forEach((rd) => {
      if (correctArr.includes(rd.value) && rd.checked) {
        setResult((preResult) => preResult + 1);
      }
      if (correctArr.includes(rd.value)) {
        rd.nextSibling.style.background = '#94D7A2';
        rd.nextSibling.style.border = 'none';
      } else if (rd.checked) {
        rd.nextSibling.style.border = 'none';
        rd.nextSibling.style.background = '#F8BCBC';
        rd.nextSibling.style.color = '#2932645d';
      } else {
        rd.nextSibling.style.color = '#2932645d';
        rd.nextSibling.style.borderColor = '#2932645d';
      }
    });

    //disable all radio buttons after showing result
    allRadioButtons.forEach((rd) => (rd.disabled = true));
  }

  function start() {
    setQuizStart(true);
  }

  function newGame() {
    setQuizStart(false);
    setResult(0);
  }

  return quizStart ? (
    <Quiz
      questions={questions}
      check={checkAnswers}
      result={result}
      gameRun={quizStart}
      newGame={newGame}
    />
  ) : (
    <Home start={start} />
  );
}
