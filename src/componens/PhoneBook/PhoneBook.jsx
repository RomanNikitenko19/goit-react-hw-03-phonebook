import { nanoid } from 'nanoid';
import { Component } from "react";
import Contacts from "../Contacts";
import PhoneBookForm from "../PhoneBookForm";

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  addContacts = ({ name, number }) => {
    const result = { id: nanoid(), number, name }; //Object {id: nanoid(), name: qwe}

    const isUniqueName = this.checkName(name);

    if (isUniqueName) {
      return alert(`${name} no alredy in contacts`);
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, result],
    }));
  };

  checkName = value => this.state.contacts.some(({ name }) => name === value);

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  };

  deleteContacts = id => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <PhoneBookForm addContacts={this.addContacts} />
        <Contacts
          filterContacts={this.filterContacts()}
          handleChange={this.handleChange}
          filter={filter}
          deleteContacts={this.deleteContacts}
        />
      </>
    );
  }
}
export default PhoneBook;