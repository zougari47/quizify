import Answers from './Answers';
import PARSER from '../../functions/parser';

const style = {
  questionContainer: 'question border-[#DBDEF0] border-b-[1px] pb-4 pt-2',
  question: 'text-blueStrong font-bold mb-2 font-Karla',
  btn: 'bg-blue text-body font-Inter text-base w-[193px] h-[52px] leading-[19.36px] rounded-[15px] duration-300 hover:rounded-tl-[0] hover:rounded-br-[0] hover:rounded-r[15px] hover:rounded-l-[15px]'
};

const Question = ({ obj }) => {
  return (
    <div className={style.questionContainer}>
      <p className={style.question}>{PARSER(obj.question)}</p>
      <Answers obj={obj} />
    </div>
  );
};

export default Question;
