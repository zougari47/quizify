import categories from './data';
const listCategories = [];

const DropDown = ({ _style, setQuery }) => {
  for (const category in categories) {
    listCategories.push(
      <option value={categories[category].code}>
        {categories[category].text}
      </option>
    );
  }

  return (
    <select
      className={_style}
      onChange={e => {
        const val = e.target.value;
        setQuery(val);
      }}
    >
      {listCategories}
    </select>
  );
};

export default DropDown;
