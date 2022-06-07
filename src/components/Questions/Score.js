const style = {
  container: 'mt-5 flex justify-around items-center',
  p: 'font-Inter text-[16px] text-[#293264] font-bold inline',
  btn: 'bg-blue text-body font-Inter text-base w-[193px] h-[52px] leading-[19.36px] rounded-[15px] duration-300 hover:rounded-tl-[0] hover:rounded-br-[0] hover:rounded-r[15px] hover:rounded-l-[15px]'
};

const Score = ({ score, restartGame }) => {
  return (
    <div className={style.container}>
      <p className={style.p}>You scored {score}/5 correct answers</p>
      <button className={style.btn} onClick={restartGame}>
        Play again
      </button>
    </div>
  );
};

export default Score;
