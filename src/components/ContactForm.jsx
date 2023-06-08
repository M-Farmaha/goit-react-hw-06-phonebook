import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './styled';

export const ContactForm = ({ contacts, handleContactFormSubmit }) => {
  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem('NAME')) ?? ''
  );
  const [number, setNumber] = useState(
    JSON.parse(window.localStorage.getItem('NUMBER')) ?? ''
  );

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  useEffect(() => {
    window.localStorage.setItem('NAME', JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem('NUMBER', JSON.stringify(number));
  }, [number]);

  const handleChangeNameInput = e => {
    setName(e.target.value);
  };

  const handleChangeNumberInput = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts `);
      return;
    }

    handleContactFormSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={inputNameId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChangeNameInput}
        id={inputNameId}
        pattern="^(?=.{1,20}$)[\p{L} '-]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={inputNumberId}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChangeNumberInput}
        id={inputNumberId}
        pattern="\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,6}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  handleContactFormSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
