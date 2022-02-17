import React from 'react';
import style from './Quiz.scss';
import { nanoid, random } from 'nanoid';

export default function Quiz(props) {
  const [questions] = React.useState(props.questions || []);
  const [questionJSX, setQuestionJSX] = React.useState([]);
  const [resultHidden, setResultHidden] = React.useState(true);
  var parser = new DOMParser();
  const correctAnswerArray = questions.map((obj) => parse(obj.correct_answer));

  //Transform HTML symbol to real character (&amp; => & ...)
  function parse(str) {
    return parser.parseFromString(`<!doctype html><body>${str}`, 'text/html')
      .body.textContent;
  }

  React.useEffect(() => {
    setQuestionJSX((p) => {
      return questions.map((questionObj, index) => {
        //mix all answers in one array then sort them randomly
        const answers = [
          ...questionObj.incorrect_answers,
          questionObj.correct_answer
        ].sort((a, b) => 0.5 - Math.random());
        return (
          <div className="question" key={nanoid()}>
            <h1>{parse(questionObj.question)}</h1>
            <div className="answers">
              <input
                type="radio"
                id={answers[0].replace(/\s/g, '')}
                name={index}
                value={parse(answers[0])}
              />
              <label htmlFor={answers[0].replace(/\s/g, '')}>
                {parse(answers[0])}
              </label>
              <input
                type="radio"
                id={answers[1].replace(/\s/g, '')}
                name={index}
                value={parse(answers[1])}
              />
              <label htmlFor={answers[1].replace(/\s/g, '')}>
                {parse(answers[1])}
              </label>
              <input
                type="radio"
                id={answers[2].replace(/\s/g, '')}
                name={index}
                value={parse(answers[2])}
              />
              <label htmlFor={answers[2].replace(/\s/g, '')}>
                {parse(answers[2])}
              </label>
              <input
                type="radio"
                id={answers[3].replace(/\s/g, '')}
                name={index}
                o
                value={parse(answers[3])}
              />
              <label htmlFor={answers[3].replace(/\s/g, '')}>
                {parse(answers[3])}
              </label>
            </div>
          </div>
        );
      });
    });
  }, []);

  function showResult() {
    setResultHidden(false);
  }

  return (
    <div className="questions">
      {questionJSX}

      {resultHidden ? (
        <button
          id="check"
          onClick={() => {
            props.check(correctAnswerArray);
            showResult();
          }}
        >
          Check answers
        </button>
      ) : (
        <div className="result">
          <h2>You scored {props.result}/5 correct answers</h2>
          <button id="play" onClick={props.newGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
