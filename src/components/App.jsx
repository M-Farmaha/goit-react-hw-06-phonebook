import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Section, PhonebookTitle, ContactTitle } from './styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('CONTACTS')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState(
    JSON.parse(window.localStorage.getItem('FILTER')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('FILTER', JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    window.localStorage.setItem('CONTACTS', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactFormSubmit = data => setContacts(prev => [...prev, data]);

  const handleFilter = string => setFilter(string);

  const handleDelete = data =>
    setContacts(prev => prev.filter(el => el.id !== data));

  return (
    <Section>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm {...{ contacts, handleContactFormSubmit }} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter {...{ filter, handleFilter }} />
      {contacts.length !== 0 && (
        <ContactList {...{ contacts, filter, handleDelete }} />
      )}
    </Section>
  );
};
