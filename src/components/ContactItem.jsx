import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';

import PropTypes from 'prop-types';
import {
  ContactItemWrap,
  ContactName,
  ContactNumber,
  DeleteButton,
  DeleteIcon,
} from './styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemWrap>
      <ContactName>{contact.name}: </ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton
        type="button"
        id={contact.id}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <DeleteIcon />
      </DeleteButton>
    </ContactItemWrap>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
