import PropTypes, { func } from 'prop-types';
import { ContactItem } from './ContactItem';
import { ContactListWrap } from './styled';

export const ContactList = ({ contacts, filter, handleDelete }) => {
  const lowerCaseFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return (
    visibleContacts.length !== 0 && (
      <ContactListWrap>
        {visibleContacts.map(contact => {
          return (
            <ContactItem key={contact.id} {...{ contact, handleDelete }} />
          );
        })}
      </ContactListWrap>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  handleDelete: func.isRequired,
};
