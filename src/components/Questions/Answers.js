import Answer from './Answer';
import { nanoid } from 'nanoid';
import PARSER from '../../functions/parser';

const Answers = ({ obj }) => {
  const randomName = nanoid();
  const answers = [obj.correct_answer, ...obj.incorrect_answers]
    .sort((a, b) => 0.5 - Math.random())
    .map((answer, index) => (
      <Answer
        key={index}
        _name={randomName}
        _id={nanoid()}
        content={PARSER(answer)}
        val={PARSER(answer + obj.question)}
      />
    ));

  return <>{answers}</>;
};

export default Answers;
