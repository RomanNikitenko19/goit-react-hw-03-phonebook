import PropTypes from "prop-types";
import Title from "../Title";
import ContactsList from "../ContactsList";
const Contacts = ({ filterContacts, handleChange, filter, deleteContacts, contacts }) => {
  return (
    <>
      <Title title={"Contacts"} />
      {contacts.length > 1 && (
        <label>
          Find contact by name
          <input onChange={handleChange} value={filter} type="text" name="filter" />
        </label>
      )}
      <ContactsList filterContacts={filterContacts} deleteContacts={deleteContacts} />
    </>
  );
};
Contacts.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  deleteContacts: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired
};

export default Contacts;
