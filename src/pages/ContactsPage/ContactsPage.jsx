import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm ';
import { fetchContacts } from 'redux/contacts/contactsThunks';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import Skeleton from '@mui/material/Skeleton';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <div>{isLoading && <Skeleton animation="wave" />}</div>
      <ContactList />
    </>
  );
};
export default ContactsPage;
