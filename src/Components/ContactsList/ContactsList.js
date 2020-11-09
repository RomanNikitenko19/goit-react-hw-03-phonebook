import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import "./ContactsList.css";

const ContactsList = (props) => {
  const { contacts, deleteContact } = props;
  return (
    <>
      <SectionTitle>
        <h2 className="title">Contacts</h2>
      </SectionTitle>
      <ul className="list">
        {contacts.map((contact) => (
          <li className="item" key={contact.id}>
            {contact.name}: &nbsp;
            {contact.number}
            <button className="delete-btn" onClick={() => deleteContact(contact.id)} type="button">
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
