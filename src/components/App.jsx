import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

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
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  removeContact(id) { 
    const newList = this.contacts.filter((contact) => contact.id !== id);
  return this.setState(newList)
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList contacts={this.filteredContacts()} 
        onRemove={this.removeContact}/>
      </div>
    );
  }
}
