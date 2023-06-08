import PropTypes from 'prop-types';
import {
  ContactItemWrap,
  ContactName,
  ContactNumber,
  DeleteButton,
  DeleteIcon,
} from './styled';

export const ContactItem = ({ contact, handleDelete }) => {
  const handleDeleteIconClick = e => {
    handleDelete(e.currentTarget.id);
  };

  return (
    <ContactItemWrap>
      <ContactName>{contact.name}: </ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton
        type="button"
        id={contact.id}
        onClick={handleDeleteIconClick}
      >
        <DeleteIcon />
      </DeleteButton>
    </ContactItemWrap>
  );
};

ContactItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
