import { useEffect, useRef, useState } from 'react';
import Question from './Question';
import Loader from './Loader';
import Score from './Score';
import PARSER from '../../functions/parser';

const Questions = ({ api, restartGame }) => {
  // State
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isResultShown, setIsResultShown] = useState(false);
  const questionJSX = questions.map((obj, index) => (
    <Question key={index} obj={obj} />
  ));

  // Functions
  const checkAnswers = () => {
    let SCORE = 0;
    const selectorArr = questions.reduce((arr, obj) => {
      return [
        ...arr,
        PARSER(obj.correct_answer + obj.question).replaceAll(/\W/gi, '')
      ];
    }, []);

    selectorArr.forEach(val => {
      // correct answer radio button
      const rd = document.querySelector(`[value="${val}"]`);
      const nameAttr = rd.getAttribute('name');
      // wrong answers radio buttons
      const rdButtons = document.querySelectorAll(
        `[name="${nameAttr}"]:not([value="${val}"])`
      );

      rd.checked && SCORE++;
      rd.classList.add('correct');
      rdButtons.forEach(x =>
        x.classList.add(x.checked ? 'wrong' : 'not-selected')
      );
    });
    // update states
    setScore(SCORE);
    setIsResultShown(true);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const result = await response.json();

      setQuestions(() => {
        const qs = result.results.map(obj => {
          return {
            question: obj.question,
            correct_answer: obj.correct_answer,
            incorrect_answers: obj.incorrect_answers
          };
        });

        return qs;
      });
      setIsLoading(false);
    })();
  }, []);

  return (
    <main className={style.main}>
      <div className={style.container}>
        {/* show questions */}
        {isLoading ? <Loader /> : questionJSX}
        {/* show "check answer" btn */}
        {!isLoading && !isResultShown && (
          <button className={style.btn} onClick={checkAnswers}>
            Check answers
          </button>
        )}
        {/* show score */}
        {isResultShown && <Score score={score} restartGame={restartGame} />}
      </div>
    </main>
  );
};

const style = {
  main: 'flex justify-center items-center min-h-screen',
  container: 'bg-body max-w-[550px] p-4 shadow',
  btn: 'bg-blue text-body font-Inter text-base w-[193px] h-[52px] leading-[19.36px] rounded-[15px] duration-300 hover:rounded-tl-[0] hover:rounded-br-[0] hover:rounded-r[15px] hover:rounded-l-[15px] mt-4 block mx-auto'
};

export default Questions;
