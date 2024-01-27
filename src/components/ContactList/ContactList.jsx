import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactList extends Component {
  //   state = {
  //     contacts: [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  //     name: '',
  //     number: '',
  //     filter: '',
  //   };

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>{`${contact.name}: ${contact.number}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}
