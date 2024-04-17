import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

const SearchBox = () => {
  const searchStr = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <h2>Find contact by name</h2>
      <input
        className={css.input}
        value={searchStr}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        placeholder="Enter contact name..."
      />
    </div>
  );
};

export default SearchBox;
