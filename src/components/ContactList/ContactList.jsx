import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts = [], onDelete }) => {
  if (!contacts.length) {
    return "No contacts to show...";
  }
  return (
    <ul className={css.ul}>
      <h2 className={css.list}> Contact List</h2>
      {contacts.map((contact) => (
        <Contact item={contact} key={contact.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
