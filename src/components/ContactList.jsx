import { ContactItem } from './ContactItem';
import { ContactListWrap } from './styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactListWrap>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactListWrap>
  );
};
