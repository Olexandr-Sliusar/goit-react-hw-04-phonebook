import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isAlreadyExist = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isAlreadyExist) {
      alert(`${newContact.name} is already in contacts`);
      return false;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    return true;
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFlteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <Filter onChange={this.changeFilter} filter={this.state.filter} />
        )}

        {this.getFlteredContacts().length > 0 ? (
          <ContactList
            contacts={this.getFlteredContacts()}
            onDelete={this.deleteContact}
          />
        ) : (
          <p> There is no contacts</p>
        )}
        <GlobalStyle />
      </div>
    );
  }
}