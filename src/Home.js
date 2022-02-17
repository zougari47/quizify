import React from 'react';
import style from './Home.scss';
import { render } from 'react-dom';

export default function Home(props) {
  return (
    <div className="container">
      <h1>Quizzical</h1>
      <p>Click the button to start</p>
      <button onClick={props.start} className="btn">
        Start Quiz
      </button>
    </div>
  );
}
