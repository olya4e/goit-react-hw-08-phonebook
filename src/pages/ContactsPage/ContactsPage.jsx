import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm ';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsThunks';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { FallingLines } from 'react-loader-spinner';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <ContactForm />
      <div>
        {isLoading && (
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        )}
      </div>
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
