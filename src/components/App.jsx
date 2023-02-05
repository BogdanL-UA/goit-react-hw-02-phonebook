import { Component } from 'react';
import { nanoid } from 'nanoid';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import styles from '../components/App.module.scss';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onChangeFilter = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  };

  isDublicate = (name, newNumber) => {
    const nameNormalize = name.toLowerCase();
    const { contacts } = this.state;
    const contact = contacts.find(({ name, number }) => {
      return nameNormalize === name.toLowerCase() && number === newNumber;
    });
    return Boolean(contact);
  };

  AddContact = ({ name, number }) => {
    this.setState(prevState => {
      if (this.isDublicate(name, number)) {
        return alert(`${name}:${number} is already exist!`);
      }
      const id = nanoid();
      const newContact = { name, number, id };
      const { contacts } = prevState;
      return { contacts: [newContact, ...contacts] };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(filterLowerCase) ||
        number.includes(filterLowerCase)
      );
    });
    return result;
  };

  render() {
    const contacts = this.getFilteredContacts();

    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.AddContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter onChange={this.onChangeFilter} />
        <Contacts contacts={contacts} removeContact={this.removeContact} />
      </div>
    );
  }
}
export default App;
