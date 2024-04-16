import css from "./Contact.module.css";
const Contact = ({ item, onDelete }) => {
  const { id, name, number } = item;
  return (
    <li className={css.item}>
      <h2> {name}</h2>
      <p>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
