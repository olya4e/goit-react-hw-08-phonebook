import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  if (!filteredContacts) {
    return <p>Not found contacts</p>;
  }
  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
