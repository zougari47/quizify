const style = {
  label:
    'rounded-[8px] border-[1px] border-blueStrong text-blueStrong py-2 px-4 text-[#000] font-medium text--[12.24px] leading-[12px] mr-[12.5px] last:mr-0 cursor-pointer select-none inline-block mb-2',
  radioBtn: 'hidden'
};
// in the value add question before the value

const Answer = ({ _id, _name, content, val }) => {
  return (
    <>
      <input
        type="radio"
        name={_name}
        id={_id}
        className={style.radioBtn}
        value={val.replaceAll(/\W/gi, '')}
      />
      <label htmlFor={_id} className={style.label}>
        {content}
      </label>
    </>
  );
};

export default Answer;
