import Categories from './Categories/Categories';

const style = {
  container:
    'w-full h-full max-w-[550px] max-h-[550px] bg-body absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] grid place-items-center shadow',
  section: 'text-center',
  title: 'font-bold text-[31.25px] leading-[37px] text-blueStrong font-Karla',
  description:
    'mt-[7px] mb-[29px] font-Inter font-normal text-blueStrong text-base',
  dropDown: 'block mb-[29px] p-4 ',
  btn: 'bg-blue text-body font-Inter text-base w-[193px] h-[52px] leading-[19.36px] rounded-[15px] duration-300 hover:rounded-tl-[0] hover:rounded-br-[0] hover:rounded-r[15px] hover:rounded-l-[15px]'
};

function Home({ playGame, setQuery }) {
  return (
    <main className={style.container}>
      <section className={style.section}>
        <h1 className={style.title}>Quizzical</h1>
        <p className={style.description}>Ready to Answer 5 Questions?</p>
        <Categories _style={style.dropDown} setQuery={setQuery} />
        <button onClick={playGame} className={style.btn}>
          Start Quiz
        </button>
      </section>
    </main>
  );
}

export default Home;
