import React, { Component } from 'react';

export default class ContactList extends Component {

  

  render() {
    const { onRemove, contacts } = this.props;

    return (
      <div>
        <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>{`${contact.name}: ${contact.number}`}
            <button onClick={() => this.removeContact(contact.id)}>Delete</button>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}
