import css from "./SearchBox.module.css";

const SearchBox = ({ searchStr, setSearch }) => {
  return (
    <div className={css.search}>
      <h2>Find contact by name</h2>
      <input
        className={css.input}
        value={searchStr}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Enter contact name..."
      />
    </div>
  );
};

export default SearchBox;
