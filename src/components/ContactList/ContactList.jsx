import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };
  if (!contacts.length) {
    return "No contacts to show...";
  }
  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <Contact key={contact.id} item={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
