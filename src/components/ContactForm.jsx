import { useState, useEffect } from 'react';
import { Form, Label, Input, Button } from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/slice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState(
    JSON.parse(window.localStorage.getItem('NAME')) ?? ''
  );
  const [number, setNumber] = useState(
    JSON.parse(window.localStorage.getItem('NUMBER')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('NAME', JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    window.localStorage.setItem('NUMBER', JSON.stringify(number));
  }, [number]);

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts `);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={'inputNameId'}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        id={'inputNameId'}
        pattern="^(?=.{1,20}$)[\p{L} '-]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={'inputNumberId'}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        id={'inputNumberId'}
        pattern="\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,6}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
