import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isAlreadyExist = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isAlreadyExist) {
      alert(`${newContact.name} is already in contacts`);
      return false;
    }
    setContacts(prevState => [...prevState, newContact]);
    return true;
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getFlteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(item => item.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <Filter onChange={changeFilter} filter={filter} />
      )}

      {getFlteredContacts().length > 0 ? (
        <ContactList contacts={getFlteredContacts()} onDelete={deleteContact} />
      ) : (
        <p> There is no contacts</p>
      )}
      <GlobalStyle />
    </div>
  );
};
