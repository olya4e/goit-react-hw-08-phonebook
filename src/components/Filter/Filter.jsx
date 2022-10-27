import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/slices/filterSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <input
      className={css.input}
      type="text"
      name="name"
      value={filter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      placeholder="Find contact"
      onChange={handleChangeFilter}
    />
  );
};
