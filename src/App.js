import React, { Component } from "react";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/ContactsList/Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filterPhoneBook: "",
  };

  componentDidMount() {
    console.log("componentDidMount");
    if (localStorage.getItem("phoneBook")) {
      this.setState({
        contacts: [...JSON.parse(localStorage.getItem("phoneBook"))],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("phoneBook", JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  getFilterValue = (e) => {
    this.setState({ filterPhoneBook: e.target.value });
  };

  addContact = (contact) => {
    this.state.contacts.some((elem) => elem.name === contact.name)
      ? alert(`${contact.name} has already`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, { ...contact, id: new Date() }],
        }));
  };

  deleteContact = (id) => {
    this.setState({
      contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
    });
  };

  filterContactList = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filterPhoneBook.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <div className="container">
          <Form addContact={this.addContact} />
          <Filter getFilterValue={this.getFilterValue} filterPhoneBook={this.state.filterPhoneBook} />
          <ContactsList contacts={this.filterContactList()} deleteContact={this.deleteContact} />
        </div>
      </>
    );
  }
}

export default App;

