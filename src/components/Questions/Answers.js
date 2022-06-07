import Answer from './Answer';
import { nanoid } from 'nanoid';

const style = {};

const Answers = ({ obj }) => {
  const randomName = nanoid();
  const answers = [obj.correct_answer, ...obj.incorrect_answers]
    .sort((a, b) => 0.5 - Math.random())
    .map((answer, index) => (
      <Answer
        key={index + 2}
        _name={randomName}
        _id={nanoid()}
        content={answer}
      />
    ));

  return <>{answers}</>;
};

export default Answers;
